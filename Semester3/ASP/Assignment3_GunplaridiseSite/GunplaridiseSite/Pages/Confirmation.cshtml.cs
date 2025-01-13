using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace GunplaridiseSite.Pages
{
    public class ConfirmationModel : PageModel
    {
        public void OnGet()
        {
			var invoiceNumber = Request.Query["InvoiceNumber"];
		}
	}
}
