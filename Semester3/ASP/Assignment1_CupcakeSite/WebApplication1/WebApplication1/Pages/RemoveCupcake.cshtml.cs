using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using CupcakeApplication.Models;
using CupcakeApplication.Data;

namespace CupcakeApplication.Pages
{
    public class RemoveCupcakeModel : PageModel
    {
        [BindProperty]
        public Cupcake Cupcake { get; set; }
        public void OnGet(int id)
        {
            //initialize the cupcake
            Cupcake = DatabaseClass.getCupcakeById(id);
        }

        public IActionResult OnPost()
        {
			DatabaseClass.RemoveCupcake(Cupcake.CupcakeId);
			return RedirectToPage("Index");
		}
    }
}
