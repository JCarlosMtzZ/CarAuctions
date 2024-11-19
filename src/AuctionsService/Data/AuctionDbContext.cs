using AuctionsService.Entities;
using Microsoft.EntityFrameworkCore;

namespace AuctionsService.Data;

public class AuctionDbContext(DbContextOptions options) : DbContext(options)
{
    public DbSet<Auction> Auctions { get; set; }
}
