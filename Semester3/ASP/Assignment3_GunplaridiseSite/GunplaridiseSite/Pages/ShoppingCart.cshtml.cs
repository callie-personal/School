using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;

namespace GunplaridiseSite.Pages
{
    public class ShoppingCartModel : BasePageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

		public List<int> CartItems { get; set; } = new List<int>();

        public ShoppingCartModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public Gunpla Gunpla { get; set; } = default!;
        public Grade Grade { get; set; } = default!;


        public Gunpla GetGunplaById(int gunplaId)
        {
            return _context.Gunpla.FirstOrDefault(g => g.GunplaId == gunplaId);
        }

        public async Task OnGetAsync()
        {
            CartItems = GetCart();
            var gunplaItems = await GetGunplaFromCartAsync(CartItems);
            getCartItemCount();
        }

        public async Task<List<Gunpla>> GetGunplaFromCartAsync(List<int> cartItems)
        {
            var gunplaList = new List<Gunpla>();
            foreach (var itemId in cartItems)
            {
                var gunpla = await _context.Gunpla
                    .Include(g => g.Grade)
                    .FirstOrDefaultAsync(g => g.GunplaId == itemId);
                if (gunpla != null)
                {
                    gunplaList.Add(gunpla);
                }
            }
            return gunplaList;
        }

        public List<int> GetCart()
        {
            string? cookieValue = Request.Cookies["GunplaridiseSite"];
            List<int> cart = new List<int>();
            if (!string.IsNullOrEmpty(cookieValue))
            {
                cart = cookieValue.Split(',').Select(int.Parse).ToList();
            }
            return cart;
        }

        public bool IsCartEmpty()
        {
            string? cookieValue = Request.Cookies["GunplaridiseSite"];
            if (string.IsNullOrEmpty(cookieValue))
            {
                return false;
            }
            else
            {
                return true;
            }
        }
    }
}
