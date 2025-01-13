namespace LastAirbenderCollection.Models
{
    public class Character
    {
        public int CharacterId { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Age { get; set; } = string.Empty;
        public string FileName { get; set; } = string.Empty;
        public DateTime CreatedDate { get; set; }
        public Category Category { get; set; } = new();
        
    }
}
