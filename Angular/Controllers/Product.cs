using Newtonsoft.Json;

namespace Angular.Controllers
{
    public class Product
    {
        public int Id { get; set; }

        [JsonProperty("name")]
        public string Name { get; set; }

        [JsonProperty("amount")]
        public int Amount { get; set; }
    }
}
