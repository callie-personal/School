using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using LastAirbenderCollection.Data;
using LastAirbenderCollection.Models;
using Microsoft.EntityFrameworkCore;

namespace LastAirbenderCollection.Pages
{
    public class IndexModel : PageModel
    {
        private readonly ILogger<IndexModel> _logger;
        private readonly LastAirbenderCollectionContext _context;

        public IList<Character> Characters { get; set; } = default!;

        public IndexModel(ILogger<IndexModel> logger, LastAirbenderCollectionContext context)
        {
            _logger = logger;
            _context = context;
        }

        public async Task OnGetAsync()
        {
            Characters = await _context.Character.ToListAsync();
        }
    }
}
