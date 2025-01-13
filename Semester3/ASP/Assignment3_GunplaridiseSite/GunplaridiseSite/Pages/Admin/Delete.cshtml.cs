using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using GunplaridiseSite.Data;
using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Authorization;

namespace GunplaridiseSite.Pages.Admin
{
	[Authorize]
	public class DeleteModel : PageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public DeleteModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Gunpla Gunpla { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var gunpla = await _context.Gunpla.FirstOrDefaultAsync(m => m.GunplaId == id);

            if (gunpla == null)
            {
                return NotFound();
            }
            else
            {
                Gunpla = gunpla;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var gunpla = await _context.Gunpla.FindAsync(id);
            if (gunpla != null)
            {
                Gunpla = gunpla;
                _context.Gunpla.Remove(Gunpla);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
