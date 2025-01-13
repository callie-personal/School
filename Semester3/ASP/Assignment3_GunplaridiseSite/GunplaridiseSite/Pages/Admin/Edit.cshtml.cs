using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using GunplaridiseSite.Data;
using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Authorization;

namespace GunplaridiseSite.Pages.Admin
{
	[Authorize]

	public class EditModel : PageModel
    {
		private readonly GunplaridiseContext _context;

        [BindProperty]
        public Gunpla Gunpla { get; set; } = default!;

        public List<SelectListItem> GradeOptions { get; set; } = new List<SelectListItem>();

        [BindProperty]
        public IFormFile? FileUpload { get; set; }

        public EditModel(GunplaridiseContext context)
        {
            _context = context;

            List<Grade> grades = _context.Grade.ToList();

            foreach (var grade in grades)
            {
                GradeOptions.Add(new SelectListItem
                {
                    Text = grade.GradeName,
                    Value = grade.GradeId.ToString()
                });
            }
        }


        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var gunpla =  await _context.Gunpla.FirstOrDefaultAsync(m => m.GunplaId == id);
            if (gunpla == null)
            {
                return NotFound();
            }
            Gunpla = gunpla;
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            Grade selectGrade = _context.Grade.Single(g => g.GradeId == Gunpla.Grade.GradeId);
            Gunpla.Grade = selectGrade;

            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Handle file upload
            if (FileUpload != null && FileUpload.Length > 0)
            {
                // Get the file name
                Gunpla.ImageFilename = FileUpload.FileName;
                // Optionally, you might want to save the file to a specific location or store its content in the database
                // Example: Save the file to a specific location
                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "uploads", Gunpla.ImageFilename);
                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    await FileUpload.CopyToAsync(fileStream);

                }
            }

            if (FileUpload == null || FileUpload.Length == 0)
            {
                var existingCharacter = await _context.Gunpla.AsNoTracking().FirstOrDefaultAsync(m => m.GunplaId == Gunpla.GunplaId);
                Gunpla.ImageFilename = existingCharacter.ImageFilename;

            }

            _context.Attach(Gunpla).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GunplaExists(Gunpla.GunplaId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return RedirectToPage("./Index");
        }

        private bool GunplaExists(int id)
        {
            return _context.Gunpla.Any(e => e.GunplaId == id);
        }
    }
}
