using Domain;
using Microsoft.EntityFrameworkCore;
 
namespace Persistence;

public class DevMeetDbContext(DbContextOptions<DevMeetDbContext> options) : DbContext(options)
{
    public required DbSet<Activity> Activities { get; set; }
}
