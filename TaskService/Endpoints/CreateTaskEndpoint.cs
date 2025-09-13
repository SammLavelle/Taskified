using FastEndpoints;
using Microsoft.AspNetCore.Mvc;
using Tasks.Events;
using Tasks.Models;

namespace Tasks.Endpoints;

public class CreateTaskRequest
{
    public string Name { get; set; }
}

public class CreateTaskResponse
{
    public int TaskId { get; set; }
    public string Name { get; set; }
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
        //Right so by using the event bus stuff, we can handle just the creating of the task here and move all the side effects somewhere else?
        var task = new TaskItem
        {
            Name = request.Name,
            IsCompleted = false,
        };
        
        _dbContext.Tasks.Add(task);
        await _dbContext.SaveChangesAsync(cancellationToken);

        await PublishAsync(new TaskCreatedEvent
        {
            TaskId = task.TaskId,
            Name = task.Name,
        });

        await Send.OkAsync(new()
        {
            TaskId = task.TaskId,
            Name = task.Name,
        });
    }
}