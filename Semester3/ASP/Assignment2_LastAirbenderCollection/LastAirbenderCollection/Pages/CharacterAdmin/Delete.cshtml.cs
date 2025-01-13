using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using LastAirbenderCollection.Data;
using LastAirbenderCollection.Models;

namespace LastAirbenderCollection.Pages.CharacterAdmin
{
    public class DeleteModel : PageModel
    {
        private readonly LastAirbenderCollection.Data.LastAirbenderCollectionContext _context;

        public DeleteModel(LastAirbenderCollection.Data.LastAirbenderCollectionContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Character Character { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var character = await _context.Character.FirstOrDefaultAsync(m => m.CharacterId == id);

            if (character == null)
            {
                return NotFound();
            }
            else
            {
                Character = character;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var character = await _context.Character.FindAsync(id);
            if (character != null)
            {
                Character = character;
                _context.Character.Remove(Character);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
