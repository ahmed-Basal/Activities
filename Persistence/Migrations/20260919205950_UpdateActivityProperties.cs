using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Persistence.Migrations
{
    /// <inheritdoc />
    public partial class UpdateActivityProperties : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Tittle",
                table: "Activities",
                newName: "Title");

            migrationBuilder.RenameColumn(
                name: "Longtitude",
                table: "Activities",
                newName: "Longitude");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Title",
                table: "Activities",
                newName: "Tittle");

            migrationBuilder.RenameColumn(
                name: "Longitude",
                table: "Activities",
                newName: "Longtitude");
        }
    }
}
