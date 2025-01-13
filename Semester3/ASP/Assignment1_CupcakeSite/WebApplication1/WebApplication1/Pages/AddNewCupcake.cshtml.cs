using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;
using CupcakeApplication.Models;
using CupcakeApplication.Data;
using System.ComponentModel;

namespace CupcakeApplication.Pages
{
    public class AddNewCupcakeModel : PageModel
    {
        private readonly ILogger<AddNewCupcakeModel> _logger;
        private readonly IWebHostEnvironment _environment;

        [BindProperty]
        public Cupcake Cupcake { get; set; } = new Cupcake();

        [BindProperty]
        [Display(Name = "Upload Image")]

        public IFormFile FileUpload { get; set; }

        public AddNewCupcakeModel(ILogger<AddNewCupcakeModel> logger, IWebHostEnvironment environment)
        {
            _logger = logger;
            _environment = environment;
        }

        public void OnGet()
        {
        }

        public IActionResult OnPost()
        {
            //validate the input
            if (!ModelState.IsValid)
            {
                return Page();
            }

            //upload a cupcake photo to server
            string filename = FileUpload.FileName;

            //update cupcake with the filename
            Cupcake.ImageFileName = filename;

            //save the cupcake to the database
            string projectDir = _environment.ContentRootPath;
            string fileSavePath = Path.Combine(projectDir, "wwwroot\\uploads", filename);

            //ensuring the firestream is closed
            using (FileStream fileStream = new FileStream(fileSavePath, FileMode.Create))
            {
                FileUpload.CopyTo(fileStream);
            }

            //save the cupcake to the database
            DatabaseClass.AddNewCupcake(Cupcake);
            return RedirectToPage("Index");
        }
    }
}
