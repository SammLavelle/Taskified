using FastEndpoints;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using Tasks.Models;
using Tasks.Utils;

namespace Tasks.Endpoints;

public class GetTasksRequest
{
    [QueryParam]
    public int PageNumber { get; set; } = 1;
}

public class GetTasksResponse
{
    public int TaskId { get; set; }
    public string Name { get; set; }
    public bool IsCompleted { get; set; }
    public string? DueDate { get; set; }
}

public class GetTasksEndpoint : Endpoint<GetTasksRequest, PaginatedList<GetTasksResponse>>
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
    
    public override async Task<PaginatedList<GetTasksResponse>> ExecuteAsync(GetTasksRequest request, CancellationToken cancellationToken)
    {
        var pageNumber = request.PageNumber;
        var pageSize = 10;
        var totalCount = await _dbContext.Tasks.CountAsync(cancellationToken);
        
        var tasks = await _dbContext.Tasks
            .Skip((pageNumber - 1) * pageSize)
            .Take(pageSize)
            .Select(x => new GetTasksResponse
            {
                TaskId = x.TaskId,
                Name = x.Name,
                IsCompleted = x.IsCompleted,
                DueDate = x.DueDate.HasValue
                    ? DateTime.SpecifyKind(x.DueDate.Value, DateTimeKind.Utc).ToString("o")
                    : null
            })
            .ToListAsync(cancellationToken);

        var paginatedTasks = new PaginatedList<GetTasksResponse>(tasks, pageNumber, pageSize, totalCount);

        return paginatedTasks;
    }
}