using FastEndpoints;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Tasks.Models;

namespace Tasks.Endpoints;

public class GetTasksResponse
{
    public int TaskId { get; set; }
    public string Name { get; set; }
    public bool IsCompleted { get; set; }
}

public class GetTasksEndpoint : EndpointWithoutRequest<List<GetTasksResponse>>
{
    private readonly TasksDbContext _dbContext;

    public GetTasksEndpoint(TasksDbContext dbContext)
    {
        _dbContext = dbContext;
    }
    
    public override void Configure()
    {
        Get("/tasks");
        AllowAnonymous();
    }
    
    public override async Task<List<GetTasksResponse>> ExecuteAsync(CancellationToken cancellationToken)
    {
        var tasks = await _dbContext.Tasks
            .Select(x => new GetTasksResponse
            {
                TaskId = x.TaskId,
                Name = x.Name,
                IsCompleted = x.IsCompleted
            })
            .ToListAsync(cancellationToken);

        return tasks;
    }
}