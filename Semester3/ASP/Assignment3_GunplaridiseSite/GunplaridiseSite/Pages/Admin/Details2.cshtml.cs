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
    public class Details2Model : PageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public Details2Model(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public Grade Grade { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var grade = await _context.Grade.FirstOrDefaultAsync(m => m.GradeId == id);
            if (grade == null)
            {
                return NotFound();
            }
            else
            {
                Grade = grade;
            }
            return Page();
        }
    }
}
