using Application.Activities.DTO;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities.Commands;

public static class CreateActivity
{
    public class Command : IRequest<string>
    {
        public required CreateActivityDto ActivityDto { get; set; }
    }

    public class Handler(DevMeetDbContext context, IMapper mapper,Ivalidator<Command> validator) : IRequestHandler<Command, string>
    {
        public async Task<string> Handle(Command request, CancellationToken cancellationToken)
        {
            var result = await validator.ValidateAsync(request);
            if(!result.IsValid)
            {
                throw new ValidationException(result.Errors);
            }
            var activity = mapper.Map<Activity>(request.ActivityDto);
            context.Activities.Add(activity);

            await context.SaveChangesAsync(cancellationToken);

            return activity.ID;
        }
    }
}
