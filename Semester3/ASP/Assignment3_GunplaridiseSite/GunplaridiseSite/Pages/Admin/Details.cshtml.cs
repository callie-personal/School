using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using GunplaridiseSite.Data;
using GunplaridiseSite.Models;

namespace GunplaridiseSite.Pages.Admin
{
    public class DetailsModel : PageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public DetailsModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

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
    }
}
