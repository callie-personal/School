using GunplaridiseSite.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System.Composition;
using System.IO;
using System.Text;

namespace GunplaridiseSite.Pages
{
    public class CheckoutModel : BasePageModel
    {
        private readonly GunplaridiseSite.Data.GunplaridiseContext _context;

        public List<int> CartItems { get; set; } = new List<int>();

        public CheckoutModel(GunplaridiseSite.Data.GunplaridiseContext context)
        {
            _context = context;
        }

        public Gunpla Gunpla { get; set; } = default!;
        public Grade Grade { get; set; } = default!;

        // Properties to store form data
        [BindProperty]
        public string FirstName { get; set; }

        [BindProperty]
        public string LastName { get; set; }

        [BindProperty]
        public string Address { get; set; }

        [BindProperty]
        public string City { get; set; }

        [BindProperty]
        public string Province { get; set; }

        [BindProperty]
        public string PostalCode { get; set; }

        [BindProperty]
        public string ccNumber { get; set; }

        [BindProperty]
        public string ccExpiryDate { get; set; }

        [BindProperty]
        public string cvv { get; set; }


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

        public async Task<IActionResult> OnPostAsync(PurchaseData purchaseData)
        {
            // Create a dictionary to store form data
            var formData = new Dictionary<string, string>
            {
                { "FirstName", FirstName },
                { "LastName", LastName },
                { "Address", Address },
                { "City", City },
                { "Province", Province },
                { "PostalCode", PostalCode },
                { "ccNumber", ccNumber },
                { "ccExpiryDate", ccExpiryDate },
                { "cvv", cvv },
                { "products", string.Join(",", GetCart()) }
            };

            var productsCookie = string.Join(",", GetCart());

            purchaseData.products = productsCookie;

            var jsonData = JsonConvert.SerializeObject(formData);

            Console.WriteLine("JSON Data:");
            Console.WriteLine(jsonData);

            using (var httpClient = new HttpClient())
            {
                var apiUrl = "https://purchasesapi20240407212852.azurewebsites.net";
                var content = new StringContent(jsonData, Encoding.UTF8, "application/json");

                var response = await httpClient.PostAsync(apiUrl, content);

                if (response.IsSuccessStatusCode)
                {
                    // Read the invoice number from the response content
                    var responseContent = await response.Content.ReadAsStringAsync();
                    var invoiceNumber = JToken.Parse(responseContent).Value<string>();


                    // Redirect to the confirmation page with the invoice number
                    return RedirectToPage("/Confirmation", new { InvoiceNumber = invoiceNumber });
                }
                else
                {
                    // Redirect to the error page
                    return RedirectToPage("/Error");
                }
            }
        }

        public double getCartTotal()
        {
            var cartItems = GetCart();
            double total = 0.0;
            foreach (var itemId in cartItems)
            {
                var gunpla = GetGunplaById(itemId);
                total += (double)gunpla.Price;
            }
            return total;
        }
    }
}
