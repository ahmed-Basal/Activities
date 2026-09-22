namespace Domain;

public class Activity
{
    public string ID { get; set; } = Guid.NewGuid().ToString();
    public string Title { get; set; } = string.Empty;
   
    public DateTime Date { get; set; } = DateTime.UtcNow;
    public string Description { get; set; } = string.Empty;
    public string Category { get; set; } = string.Empty;
    public bool IsCancelled { get; set; } = false;

    public string City { get; set; } = string.Empty;
    public string Venue { get; set; } = string.Empty;
    public double Latitude { get; set; }
    public double Longitude { get; set; }
}
