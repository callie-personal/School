using GunplaridiseSite.Data;
using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace GunplaridiseSite.Pages
{
    public class DetailsModel : BasePageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public DetailsModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public Gunpla Gunpla { get; set; } = default!;
        public Grade Grade { get; set; } = default!;


        public async Task<IActionResult> OnGetAsync(int? id)
        {
            getCartItemCount();
			if (id == null)
            {
                return NotFound();
            }

            var gunpla = await _context.Gunpla.Include("Grade").FirstOrDefaultAsync(m => m.GunplaId == id);
            //var grade = await _context.Grade.FirstOrDefaultAsync(m => m.GradeId == id);

            if (gunpla == null)
            {
                return NotFound();
            }
            else
            {
                Gunpla = gunpla;

                //Grade = grade;
                return Page();
            }
        }

		public IActionResult OnPost(int? id)
		{
			if (id == null)
			{
				return NotFound();
			}

			string? cookieValue = Request.Cookies["GunplaridiseSite"];
            List<int> cart = new List<int>();

            if (!string.IsNullOrEmpty(cookieValue))
            {
                cart = cookieValue.Split(',').Select(int.Parse).ToList();
            }

			cart.Add(id.Value);
			Response.Cookies.Append("GunplaridiseSite", string.Join(",", cart));
			return RedirectToPage("./ShoppingCart");
		}
    }
}
