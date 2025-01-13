using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace GunplaridiseSite.Pages
{
    public class HighGradeModel : BasePageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public HighGradeModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public IList<Gunpla> Gunpla { get; set; } = default!;

        public async Task OnGetAsync()
        {
            Gunpla = await _context.Gunpla.Include("Grade").ToListAsync();
            getCartItemCount();
        }
    }
}
