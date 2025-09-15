using System.ComponentModel.DataAnnotations;

namespace NotificationService.Models;

public class Notification
{
    [Key]
    public int NotificationId { get; set; }
    public string Message { get; set; }
    public DateTime DateCreated { get; set; }
    public bool IsRead { get; set; }
}