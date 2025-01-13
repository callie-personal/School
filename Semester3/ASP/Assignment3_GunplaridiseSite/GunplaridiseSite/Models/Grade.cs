namespace GunplaridiseSite.Models
{
    public class Grade
    {
        public int GradeId { get; set; }
        public string GradeName { get; set; } = string.Empty;
        public List<Gunpla> Gunplas { get; set; } = new();
    }
}
