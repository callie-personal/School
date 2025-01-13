using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using LastAirbenderCollection.Data;
using LastAirbenderCollection.Models;

namespace LastAirbenderCollection.Pages.CategoryAdmin
{
    public class IndexModel : PageModel
    {
        private readonly LastAirbenderCollection.Data.LastAirbenderCollectionContext _context;

        public IndexModel(LastAirbenderCollection.Data.LastAirbenderCollectionContext context)
        {
            _context = context;
        }

        public IList<Category> Category { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Category = await _context.Category.ToListAsync();
        }
    }
}
