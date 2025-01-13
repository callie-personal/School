namespace LastAirbenderCollection.Models
{
    public class Category
    {
        public int CategoryId { get; set; }
        public string Nation { get; set; } = string.Empty;
        public List<Character> Characters { get; set; } = new();
    }
}
