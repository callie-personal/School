using Newtonsoft.Json;

namespace GunplaridiseSite.Models
{
    public class InvoiceResponse
    {
        [JsonProperty("invoiceNumber")]
        public string? InvoiceNumber { get; set; }
    }
}
