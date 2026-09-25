using Microsoft.EntityFrameworkCore;

namespace Persistence;

// Kept for backward compatibility with existing EF Core migrations
public class AppDbContext(DbContextOptions<DevMeetDbContext> options) : DevMeetDbContext(options);
