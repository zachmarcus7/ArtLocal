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
    public class GalleriesController : ControllerBase
    {
        private readonly ArtLocalDataContext _dbContext;

        public GalleriesController(ArtLocalDataContext context)
        {
            _dbContext = context;
        }

        // GET: api/Galleries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gallery>>> GetGalleries()
        {
          if (_dbContext.Galleries == null)
          {
              return NotFound();
          }
            return await _dbContext.Galleries.ToListAsync();
        }

        // GET: api/Galleries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gallery>> GetGallery(Guid id)
        {
          if (_dbContext.Galleries == null)
          {
              return NotFound();
          }
            var gallery = await _dbContext.Galleries.FindAsync(id);

            if (gallery == null)
            {
                return NotFound();
            }

            return gallery;
        }

        // POST: api/Galleries
        [HttpPost]
        public async Task<ActionResult<Gallery>> PostGallery(Gallery gallery)
        {
            // generate a new GUID for the gallery
            gallery.GalleryId = Guid.NewGuid();

            if (_dbContext.Galleries == null)
            {
                return Problem("Entity set 'ArtLocalDataContext.Galleries'  is null.");
            }

            _dbContext.Galleries.Add(gallery);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetGallery", new { id = gallery.GalleryId }, gallery);
        }

        // PUT: api/Galleries/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGallery(Guid id, Gallery gallery)
        {
            if (id != gallery.GalleryId)
            {
                return BadRequest();
            }

            _dbContext.Entry(gallery).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GalleryExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Galleries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGallery(Guid id)
        {
            if (_dbContext.Galleries == null)
            {
                return NotFound();
            }
            var gallery = await _dbContext.Galleries.FindAsync(id);
            if (gallery == null)
            {
                return NotFound();
            }

            _dbContext.Galleries.Remove(gallery);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool GalleryExists(Guid id)
        {
            return (_dbContext.Galleries?.Any(e => e.GalleryId == id)).GetValueOrDefault();
        }
    }
}
