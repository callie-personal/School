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
    public class IndexModel : PageModel
    {
        private readonly LastAirbenderCollectionContext _context;

        public IndexModel(LastAirbenderCollectionContext context)
        {
            _context = context;
        }

        public IList<Character> Characters { get;set; } = default!;

public async Task OnGetAsync()
        {
            Characters = await _context.Character.Include("Category").ToListAsync();
        }
    }
}
