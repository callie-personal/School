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
    public class DetailsModel : PageModel
    {
        private readonly LastAirbenderCollection.Data.LastAirbenderCollectionContext _context;

        public DetailsModel(LastAirbenderCollection.Data.LastAirbenderCollectionContext context)
        {
            _context = context;
        }

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
    }
}
