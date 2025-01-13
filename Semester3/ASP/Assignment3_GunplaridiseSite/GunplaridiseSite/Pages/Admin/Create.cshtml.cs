using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using GunplaridiseSite.Data;
using GunplaridiseSite.Models;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Authorization;

namespace GunplaridiseSite.Pages.Admin
{
	[Authorize]
	public class CreateModel : PageModel
    {
        private readonly GunplaridiseContext _context;
        private readonly IHostEnvironment _environment;

        [BindProperty]
        public Gunpla Gunpla { get; set; } = new Gunpla();

        [BindProperty]
        [Display(Name = "Upload Photo")]
        public IFormFile FileUpload { get; set; }

        public List<SelectListItem> GradeOptions { get; set; } = new List<SelectListItem>();

        public CreateModel(GunplaridiseContext context, IHostEnvironment environment)
        {
            _context = context;
            _environment = environment;

            List<Grade> grades = _context.Grade.ToList();

            foreach (var grade in grades)
            {
                GradeOptions.Add(new SelectListItem{
                    Text = grade.GradeName,
                    Value = grade.GradeId.ToString()
                });
            }
        }

        public IActionResult OnGet()
        {
            return Page();
        }

        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {
            Grade selectGrade = _context.Grade.Single(g => g.GradeId == Gunpla.Grade.GradeId);
            Gunpla.Grade = selectGrade;

            //set the release date to a specific date in the past entered into the text box
            DateOnly releaseDate = Gunpla.ReleaseDate;
            
            if (!ModelState.IsValid)
            {
                return Page();
            }

            string filename = FileUpload.FileName;
            
            //update the gunplay object with the unique filename
            Gunpla.ImageFilename = filename;

            //save the file to the wwwroot/images folder
            string projectRootPath = _environment.ContentRootPath;
            string fileSavePath = Path.Combine(projectRootPath, "wwwroot", "uploads", filename);

            //using satements are used to ensure the file is closed after it is done being used
            using (var fileStream = new FileStream(fileSavePath, FileMode.Create))
            {
                await FileUpload.CopyToAsync(fileStream);
            }

            //update the .net context file with the new gunpla
            _context.Gunpla.Add(Gunpla);

            //sync context with database
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
