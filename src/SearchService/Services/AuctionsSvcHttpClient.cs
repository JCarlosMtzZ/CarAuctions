using MongoDB.Entities;
using SearchService.Models;

namespace SearchService.Services;

public class AuctionsSvcHttpClient
{
    private readonly HttpClient _httpClient;
    private readonly IConfiguration _config;

    public AuctionsSvcHttpClient(HttpClient httpClient, IConfiguration config)
    {
        _httpClient = httpClient;
        _config = config;
    }

    public async Task<List<Item>> GetItemsForSearchDb()
    {
        var lastUpdated = await DB.Find<Item, string>()
            .Sort(x => x.Descending(x => x.UpdatedAt))
            .Project(x => x.UpdatedAt.ToString())
            .ExecuteFirstAsync();
        
        return await _httpClient.GetFromJsonAsync<List<Item>>(_config["AuctionsServiceUrl"]
            + "/api/auctions?date=" + lastUpdated);
    } 
}