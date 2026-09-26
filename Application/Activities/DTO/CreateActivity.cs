namespace Application.Activities.DTO;

public class CreateActivityDto
{
    public string Title { get; set; } = string.Empty;
    public DateTime Date { get; set; } = DateTime.UtcNow;
    public string Description { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public string City { get; set; } = string.Empty;
    public string Venue { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
    public string Level { get; set; } = "All Levels"; // Beginner, Intermediate, Advanced, All Levels
    public List<string> Tags { get; set; } = [];
}
