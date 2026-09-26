using System.ComponentModel.DataAnnotations;

namespace Application.Activities.DTO;

public class CreateActivityDto
{
    [Required(ErrorMessage = "Title is required")]
    [StringLength(100, MinimumLength = 3, ErrorMessage = "Title must be between 3 and 100 characters")]
    public string Title { get; set; } = string.Empty;

    [Required(ErrorMessage = "Date is required")]
    public DateTime Date { get; set; } = DateTime.UtcNow;

    [Required(ErrorMessage = "Description is required")]
    [StringLength(1000, ErrorMessage = "Description cannot exceed 1000 characters")]
    public string Description { get; set; } = string.Empty;

    [Required(ErrorMessage = "Category is required")]
    public string Category { get; set; } = string.Empty;

    [Required(ErrorMessage = "City is required")]
    public string City { get; set; } = string.Empty;

    [Required(ErrorMessage = "Venue is required")]
    public string Venue { get; set; } = string.Empty;

    [Range(-90.0, 90.0, ErrorMessage = "Latitude must be between -90 and 90")]
    public double Latitude { get; set; }

    [Range(-180.0, 180.0, ErrorMessage = "Longitude must be between -180 and 180")]
    public double Longitude { get; set; }

    public string Level { get; set; } = "All Levels"; // Beginner, Intermediate, Advanced, All Levels

    public List<string> Tags { get; set; } = [];
}
