
namespace GunplaridiseSite.Models
{
    public class Gunpla
    {
        public int GunplaId { get; set; }
        public string GunplaName { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string ImageFilename { get; set; } = string.Empty;
        public DateOnly ReleaseDate { get; set; }
        public decimal Price { get; set; }
        public Grade Grade { get; set; } = new();

		public static implicit operator Gunpla(List<Gunpla> v)
		{
			throw new NotImplementedException();
		}
	}
}
