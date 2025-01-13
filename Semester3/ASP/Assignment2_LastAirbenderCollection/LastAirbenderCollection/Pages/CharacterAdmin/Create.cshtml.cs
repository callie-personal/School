using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using LastAirbenderCollection.Data;
using LastAirbenderCollection.Models;
using System.ComponentModel.DataAnnotations;

namespace LastAirbenderCollection.Pages.CharacterAdmin
{
    public class CreateModel : PageModel
    {
        private readonly LastAirbenderCollectionContext _context;
        private readonly IHostEnvironment _environment;

        [BindProperty]
        public Character Character { get; set; } = new Character();

        [BindProperty]
        [Display(Name = "Upload Photo")]
        public IFormFile FileUpload { get; set; }

        public List<SelectListItem> CategoryOptions { get; set; } = new List<SelectListItem>();


        public CreateModel(LastAirbenderCollectionContext context, IHostEnvironment environment)
        {
            _context = context;
            _environment = environment;

            //get all the cateogries from the database
            List<Category> categories = _context.Category.ToList();

            foreach (var category in categories)
            {
                CategoryOptions.Add(new SelectListItem
                {
                    Text = category.Nation,
                    Value = category.CategoryId.ToString()
                });
            }
        }

        public IActionResult OnGet()
        {
            return Page();
        }



        // To protect from overposting attacks, see https://aka.ms/RazorPagesCRUD
        public async Task<IActionResult> OnPostAsync()
        {   //Set the category of the character based on user selection
            Category selectCategory = _context.Category.Single(c => c.CategoryId == Character.Category.CategoryId);
            Character.Category = selectCategory;

            //set the date the character was created
            Character.CreatedDate = DateTime.Now;

            if (!ModelState.IsValid)
            {
                return Page();
            }

            //uploading the image file for the character with a unique filename
            string filename = FileUpload.FileName;

            //update the character object with the unique filename
            Character.FileName = filename;

            //save the file to the wwwroot/images folder
            string projectRootPath = _environment.ContentRootPath;
            string fileSavePath = Path.Combine(projectRootPath, "wwwroot", "images", filename);

            //'using' statement ensures the file is closed properly after it is done being used
            using (FileStream fileStream = new FileStream(fileSavePath, FileMode.Create))
            {
                FileUpload.CopyTo(fileStream);
            }

            //update the .net context file with the new character
            _context.Character.Add(Character);

            //sync context with database
            await _context.SaveChangesAsync();

            return RedirectToPage("./Index");
        }
    }
}
