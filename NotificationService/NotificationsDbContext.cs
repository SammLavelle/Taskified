using Microsoft.EntityFrameworkCore;
using NotificationService.Models;

namespace NotificationService;

public class NotificationsDbContext : DbContext
{
    public DbSet<Notification> Notifications { get; set; }

    public NotificationsDbContext(DbContextOptions<NotificationsDbContext> options) : base(options)
    {
        
    }
}