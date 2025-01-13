using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using GunplaridiseSite.Data;
using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Authorization;

namespace GunplaridiseSite.Pages.Admin.GradeAdmin
{
	[Authorize]

	public class IndexModel : PageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public IndexModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public IList<Grade> Grade { get;set; } = default!;

        public async Task OnGetAsync()
        {
            Grade = await _context.Grade.ToListAsync();
        }
    }
}
