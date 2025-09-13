using FastEndpoints;

namespace Tasks.Events;

public class TaskCreatedEventHandler : IEventHandler<TaskCreatedEvent>
{
    private readonly ILogger _logger;

    public TaskCreatedEventHandler(ILogger<TaskCreatedEventHandler> logger)
    {
        _logger = logger;
    }
    
    public Task HandleAsync(TaskCreatedEvent evt, CancellationToken cancellationToken)
    {
        _logger.LogInformation("Task Created");
        
        //Stuff I might want to happen:
        // - Send emails to people who need em
        // - Send notifications
        // - Add audit logs
        
        return Task.CompletedTask;
    }
}