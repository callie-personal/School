using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using GunplaridiseSite.Data;
using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Authorization;

namespace GunplaridiseSite.Pages.Admin.GradeAdmin
{
	[Authorize]

	public class CreateModel : PageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public CreateModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        [BindProperty]
        public Grade Grade { get; set; } = default!;

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            _context.Grade.Add(Grade);
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
