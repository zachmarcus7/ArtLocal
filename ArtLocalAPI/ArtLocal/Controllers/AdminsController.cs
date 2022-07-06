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
          if (_dbContext.Admin == null)
          {
              return NotFound();
          }
            return await _dbContext.Admin.ToListAsync();
        }

        // GET: api/Admins/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Admin>> GetAdmin(Guid id)
        {
          if (_dbContext.Admin == null)
          {
              return NotFound();
          }
            var admin = await _dbContext.Admin.FindAsync(id);

            if (admin == null)
            {
                return NotFound();
            }

            return admin;
        }

        private bool AdminExists(Guid id)
        {
            return (_dbContext.Admin?.Any(e => e.AdminId == id)).GetValueOrDefault();
        }
    }
}
