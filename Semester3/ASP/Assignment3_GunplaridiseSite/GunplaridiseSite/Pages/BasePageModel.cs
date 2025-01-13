using Microsoft.AspNetCore.Mvc.RazorPages;

namespace GunplaridiseSite.Pages
{
    public class BasePageModel : PageModel
    {
        public void getCartItemCount()
        {
            //Gets the cookie value
            string? cookieValue = Request.Cookies["GunplaridiseSite"];
            int count = 0;

            if (cookieValue != null)
            {
                string[] cookieValues = cookieValue.Split(",");
                count = cookieValues.Length;
            }
            //Sets the ViewData to the count
            ViewData["CartItemCount"] = count;
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
    }
}
