using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace GunplaridiseSite.Pages
{

    public class IndexModel : BasePageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public int itemId { get; set; }
        public IndexModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public IList<Gunpla> Gunpla { get; set; } = default!;

        public async Task OnGetAsync()
        {
            Gunpla = await _context.Gunpla.Include("Grade").ToListAsync();

            string? cookieValue = Request.Cookies["GunplaridiseSite"];

            if (cookieValue == null)
            {
				createCookie();
            }
            else
            {
                //Populates the cart with the cookie values
                string[] cookieValues = cookieValue.Split(",");
                List<int> cart = new List<int>();
                //Converts the string values to integers
                foreach (string value in cookieValues)
                {
					cart.Add(int.Parse(value));
				}
            }
            getCartItemCount();
        }

        public void createCookie()
        {
            Response.Cookies.Append("GunplaridiseSite", "", new CookieOptions
            {
                Expires = DateTime.Now.AddDays(1)
            });
        }
    }
}
