using Domain;

namespace Persistence;

public static class DbInitializer
{
    public static async Task SeedData(DevMeetDbContext context)
    {
        // If old sample data from London/Paris exists, replace it with Egyptian data
        if (context.Activities.Any(a => a.City == "London" || a.City == "Paris"))
        {
            context.Activities.RemoveRange(context.Activities);
            await context.SaveChangesAsync();
        }

        if (context.Activities.Any()) return;

        var activities = new List<Activity>
        {
            new() {
                Title = "Cairo .NET & React Summit",
                Date = DateTime.UtcNow.AddMonths(-1),
                Description = "Annual gathering of Egyptian software engineers at The Greek Campus discussing .NET 9, Cloud-Native architecture, and React 19 performance.",
                Category = "culture",
                City = "Cairo",
                Venue = "The Greek Campus, Downtown Cairo",
                Latitude = 30.0444,
                Longitude = 31.2357,
            },
            new() {
                Title = "Alexandria Coastal Tech Talk",
                Date = DateTime.UtcNow.AddDays(-12),
                Description = "Weekend developer meetup by the Mediterranean Sea discussing AI integration and web engineering at the Library of Alexandria.",
                Category = "travel",
                City = "Alexandria",
                Venue = "Bibliotheca Alexandrina Conference Hall, Al Shatby",
                Latitude = 31.2089,
                Longitude = 29.9092,
            },
            new() {
                Title = "Maadi Specialty Coffee & Code",
                Date = DateTime.UtcNow.AddDays(3),
                Description = "Casual Saturday morning coffee session on Road 9 for developers to review open-source projects, network, and exchange career tips.",
                Category = "drinks",
                City = "Cairo",
                Venue = "Road 9 Specialty Cafe, Maadi",
                Latitude = 29.9585,
                Longitude = 31.2778,
            },
            new() {
                Title = "Giza Pyramids Sound & Light Cultural Evening",
                Date = DateTime.UtcNow.AddDays(10),
                Description = "Night gathering exploring ancient Egyptian civilization and history through the iconic Sound and Light performance at the Pyramids Plateau.",
                Category = "culture",
                City = "Giza",
                Venue = "Pyramids Plateau, Giza",
                Latitude = 29.9792,
                Longitude = 31.1342,
            },
            new() {
                Title = "Zamalek Indie Film Screening",
                Date = DateTime.UtcNow.AddDays(18),
                Description = "Screening of award-winning contemporary Egyptian short movies followed by an open panel discussion with independent filmmakers.",
                Category = "film",
                City = "Cairo",
                Venue = "Zawya Cinema, Downtown / Zamalek Arts Center",
                Latitude = 30.0617,
                Longitude = 31.2198,
            },
            new() {
                Title = "Old Cairo Street Food & Heritage Walk",
                Date = DateTime.UtcNow.AddMonths(1),
                Description = "Guided culinary and cultural walk through historic Al-Muizz Street and Khan el-Khalili, tasting authentic Koshary and oriental sweets.",
                Category = "drinks",
                City = "Cairo",
                Venue = "Al-Muizz Street, Islamic Cairo",
                Latitude = 30.0514,
                Longitude = 31.2611,
            },
            new() {
                Title = "Smart Village Cloud Architecture Forum",
                Date = DateTime.UtcNow.AddMonths(2),
                Description = "Deep-dive technical conference on microservices, event-driven systems, and Kubernetes deployments for enterprise systems in Egypt.",
                Category = "culture",
                City = "Giza",
                Venue = "Smart Village Convention Center, 6th of October",
                Latitude = 30.0736,
                Longitude = 31.0185,
            },
            new() {
                Title = "Dahab Red Sea Hackathon & Diving Retreat",
                Date = DateTime.UtcNow.AddMonths(3),
                Description = "A 3-day hackathon and wellness retreat for tech teams in South Sinai, combining intense sprint coding with snorkeling in the Blue Hole.",
                Category = "travel",
                City = "Dahab",
                Venue = "Lighthouse Bay, Dahab, South Sinai",
                Latitude = 28.5097,
                Longitude = 34.5136,
            },
            new() {
                Title = "Cairo Opera House Classical Symphony",
                Date = DateTime.UtcNow.AddMonths(4),
                Description = "An evening of Arabic and Western classical symphonies performed by the Cairo Symphony Orchestra on Gezira Island.",
                Category = "music",
                City = "Cairo",
                Venue = "Main Hall, Cairo Opera House, Gezira Island",
                Latitude = 30.0426,
                Longitude = 31.2241,
            }
        };

        await context.Activities.AddRangeAsync(activities);
        await context.SaveChangesAsync();
    }
}
