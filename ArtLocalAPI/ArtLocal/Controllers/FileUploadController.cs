using ArtLocal.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.FileProviders;

namespace ArtLocal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FileUploadController : ControllerBase
    {
        private readonly IWebHostEnvironment _webHostEnvironment;

        // here, we're injecting the web host env service into our constructor
        public FileUploadController(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }
        
        [HttpPost]
        public IActionResult UploadFile(IFormFile file)
        {
            // can use the web host env to get the project's root path
            string directoryPath = Path.Combine(_webHostEnvironment.ContentRootPath, "UploadedFiles");

            // save file to the uploaded files directory
            string filePath = Path.Combine(directoryPath, file.FileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                file.CopyTo(stream);
            }

            // return the file path to the image in the response
            string url = $"{this.Request.Scheme}://{this.Request.Host}{this.Request.PathBase}/UploadedFiles/" + file.FileName;
            return Ok(url);
        }

    }
}
