using AuctionsService.DTOs;
using AuctionsService.Entities;
using AutoMapper;

namespace AuctionsService.RequestHelpers;

public class MappingProfiles : Profile
{
    public MappingProfiles()
    {
        // <From, To>

        CreateMap<Auction, AuctionDto>().IncludeMembers(x => x.Item);
        CreateMap<Item, AuctionDto>();
        CreateMap<CreateAuctionDto, Auction>()
            .ForMember(d => d.Item, o => o.MapFrom(s => s));
        CreateMap<CreateAuctionDto, Item>();
    }
}
