using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using LastAirbenderCollection.Data;
using LastAirbenderCollection.Models;

namespace LastAirbenderCollection.Pages.CharacterAdmin
{
    public class EditModel : PageModel
    {
        private readonly LastAirbenderCollectionContext _context;
        
        [BindProperty]
        public Character Character { get; set; } = default!;
        
        // Add a property to hold the list of categories
        public List<SelectListItem> CategoryOptions { get; set; } = new();


        [BindProperty]
        public IFormFile? FileUpload { get; set; }

        public EditModel(LastAirbenderCollectionContext context)
        {
            _context = context;

            List<Category> categories = _context.Category.ToList();

            // Add the categories to the select list
            foreach (var category in categories)
            {
                CategoryOptions.Add(new SelectListItem
                {
                    Text = category.Nation,
                    Value = category.CategoryId.ToString()
                });
            }
        }



        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var character =  await _context.Character.FirstOrDefaultAsync(m => m.CharacterId == id);
            if (character == null)
            {
                return NotFound();
            }
            Character = character;
            return Page();
        }

        // To protect from overposting attacks, enable the specific properties you want to bind to.
        // For more details, see https://aka.ms/RazorPagesCRUD.
        public async Task<IActionResult> OnPostAsync()
        {
            Category selectCategory = _context.Category.Single(c => c.CategoryId == Character.Category.CategoryId);
            Character.Category = selectCategory;

            if (!ModelState.IsValid)
            {
                return Page();
            }

			// Handle file upload
			if (FileUpload != null && FileUpload.Length > 0)
			{
				// Get the file name
				Character.FileName = FileUpload.FileName;
				// Optionally, you might want to save the file to a specific location or store its content in the database
				// Example: Save the file to a specific location
				var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", "images", Character.FileName);
				using (var fileStream = new FileStream(filePath, FileMode.Create))
				{
					await FileUpload.CopyToAsync(fileStream);

				}
			}

            if (FileUpload == null || FileUpload.Length == 0)
            {
				var existingCharacter = await _context.Character.AsNoTracking().FirstOrDefaultAsync(m => m.CharacterId == Character.CharacterId);
                Character.FileName = existingCharacter.FileName;

			}

			_context.Attach(Character).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CharacterExists(Character.CharacterId))
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

        private bool CharacterExists(int id)
        {
            return _context.Character.Any(e => e.CharacterId == id);
        }
    }
}
