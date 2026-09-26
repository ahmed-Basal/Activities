using Application.Activities.DTO;
using FluentValidation;

namespace Application.Activities.Validators;

public class CreateActivityvalidator : AbstractValidator<CreateActivityDto>
{
    public CreateActivityvalidator()
    {
        RuleFor(x => x.Title).NotEmpty().WithMessage("Title is required");
        RuleFor(x => x.Description).NotEmpty().WithMessage("Description is required");
        RuleFor(x => x.Category).NotEmpty().WithMessage("Category is required");
        RuleFor(x => x.City).NotEmpty().WithMessage("City is required");
        RuleFor(x => x.Venue).NotEmpty().WithMessage("Venue is required");
        RuleFor(x => x.Date).NotEmpty().WithMessage("Date is required");
    }
}