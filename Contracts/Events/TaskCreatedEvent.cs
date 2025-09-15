namespace Contracts.Events;

public class TaskCreatedEvent
{
    public int TaskId { get; set; }
    public string Name { get; set; }
    public DateTime? DueDate { get; set; }
    public DateTime CreationDate { get; set; }
}