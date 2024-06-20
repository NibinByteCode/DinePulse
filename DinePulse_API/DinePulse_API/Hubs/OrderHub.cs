using Microsoft.AspNetCore.SignalR;

namespace DinePulse_API.Hubs
{
    public class OrderHub:Hub
    {
      //  public OrderHub() { }

        public async Task TestMessage(string user, string message)
        {
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }
    }
}
