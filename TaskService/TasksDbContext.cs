using Microsoft.EntityFrameworkCore;
using Tasks.Models;

namespace Tasks;

public class TasksDbContext : DbContext
{
    public DbSet<TaskItem> Tasks { get; set; }
    public TasksDbContext(DbContextOptions<TasksDbContext> options) : base(options)
    {
        
    }
}