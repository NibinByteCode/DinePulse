namespace DinePulse_API.Models
{
    public class MenuModel
    {
        public int ItemId { get; set; }
        public string ItemName { get; set; }
        public int ItemCategory { get; set; }
        public string ItemDescription { get; set; }
        public decimal ItemPrice { get; set; }
        public byte[] ItemImage { get; set; }
        public string ItemImageBase64 { get; internal set; }
    }
}
