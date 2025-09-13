using System.ComponentModel.DataAnnotations;

namespace Tasks.Models;

public class TaskItem
{
    [Key]
    public int TaskId { get; set; }
    public string Name { get; set; }
    public bool IsCompleted { get; set; }
}