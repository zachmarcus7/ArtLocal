using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ArtLocal.Data;
using ArtLocal.Models;

namespace ArtLocal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminsController : ControllerBase
    {
        private readonly ArtLocalDataContext _dbContext;

        public AdminsController(ArtLocalDataContext context)
        {
            _dbContext = context;
        }

        // GET: api/Admins
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Admin>>> GetAdmin()
        {
          if (_dbContext.Admins == null)
          {
              return NotFound();
          }
            return await _dbContext.Admins.ToListAsync();
        }

        // GET: api/Admins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(Guid id)
        {
          if (_dbContext.Admins == null)
          {
              return NotFound();
          }
            var admin = await _dbContext.Admins.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        // Create a new Admin
        // this is here just for testing purposes
        [HttpPost]
        public async Task<ActionResult<Admin>> PostAdmin(Admin admin)
        {
            // generate a new GUID for the admin
            admin.AdminId = Guid.NewGuid();

            if (_dbContext.Admins == null)
            {
                return Problem("Entity set 'ArtLocalDataContext.Customers'  is null.");
            }

            _dbContext.Admins.Add(admin);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetAdmin", new { id = admin.AdminId }, admin);
        }

        // Authenticate an Admin's login request
        // localhost:7195/api/Admins/Authentication                                        
        [HttpPost("Authentication")]
        public async Task<IActionResult> Authenticate([FromBody] Admin admin)
        {
            // check if the admin exists in the database
            Admin test = await _dbContext.Admins.FirstOrDefaultAsync(user => user.Username == admin.Username);

            if (test == null)
            {
                return NoContent();
            }

            // test if the credentials match
            if ((admin.Username == test.Username) &&
                (admin.Password == test.Password))
            {
                return Ok();
            }
            return NoContent();

        }
    }
}
