using FastEndpoints;
using Microsoft.AspNetCore.Mvc;
using Tasks.Events;
using Tasks.Models;

namespace Tasks.Endpoints;

public class CreateTaskRequest
{
    public string Name { get; set; }
    public DateTime? DueDate { get; set; }
}

public class CreateTaskResponse
{
    public int TaskId { get; set; }
    public string Name { get; set; }
    public string? DueDate { get; set; }
}

public class CreateTaskEndpoint : Endpoint<CreateTaskRequest, CreateTaskResponse>
{
    private readonly TasksDbContext _dbContext;

    public CreateTaskEndpoint(TasksDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public override void Configure()
    {
        Post("tasks");
        AllowAnonymous();
    }

    public override async Task HandleAsync(CreateTaskRequest request, CancellationToken cancellationToken)
    {
        DateTime? dueDateUtc = null;

        if (request.DueDate.HasValue)
        {
            var dueDate = request.DueDate.Value;

            if (dueDate.Kind == DateTimeKind.Unspecified)
                dueDate = DateTime.SpecifyKind(dueDate, DateTimeKind.Local);

            dueDateUtc = dueDate.ToUniversalTime();
        }
        
        var task = new TaskItem
        {
            Name = request.Name,
            DueDate = dueDateUtc,
            IsCompleted = false,
        };
        
        _dbContext.Tasks.Add(task);
        await _dbContext.SaveChangesAsync(cancellationToken);

        await PublishAsync(new TaskCreatedEvent
        {
            TaskId = task.TaskId,
            Name = task.Name,
            DueDate = task.DueDate,
        });

        await Send.OkAsync(new()
        {
            TaskId = task.TaskId,
            Name = task.Name,
            DueDate = task.DueDate.HasValue 
                ? task.DueDate.Value.ToUniversalTime().ToString("o") 
                : null,
        });
    }
}