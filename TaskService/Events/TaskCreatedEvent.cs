namespace Tasks.Events;

public class TaskCreatedEvent
{
    public int TaskId { get; set; }
    public string Name { get; set; }
};