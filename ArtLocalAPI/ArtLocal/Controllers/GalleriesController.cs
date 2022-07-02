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
        private readonly ArtLocalDataContext _context;

        public GalleriesController(ArtLocalDataContext context)
        {
            _context = context;
        }

        // GET: api/Galleries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Gallery>>> GetGalleries()
        {
          if (_context.Galleries == null)
          {
              return NotFound();
          }
            return await _context.Galleries.ToListAsync();
        }

        // GET: api/Galleries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Gallery>> GetGallery(Guid id)
        {
          if (_context.Galleries == null)
          {
              return NotFound();
          }
            var gallery = await _context.Galleries.FindAsync(id);

            if (gallery == null)
            {
                return NotFound();
            }

            return gallery;
        }

        // PUT: api/Galleries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGallery(Guid id, Gallery gallery)
        {
            if (id != gallery.GalleryId)
            {
                return BadRequest();
            }

            _context.Entry(gallery).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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

        // POST: api/Galleries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Gallery>> PostGallery(Gallery gallery)
        {
          if (_context.Galleries == null)
          {
              return Problem("Entity set 'ArtLocalDataContext.Galleries'  is null.");
          }
            _context.Galleries.Add(gallery);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGallery", new { id = gallery.GalleryId }, gallery);
        }

        // DELETE: api/Galleries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGallery(Guid id)
        {
            if (_context.Galleries == null)
            {
                return NotFound();
            }
            var gallery = await _context.Galleries.FindAsync(id);
            if (gallery == null)
            {
                return NotFound();
            }

            _context.Galleries.Remove(gallery);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GalleryExists(Guid id)
        {
            return (_context.Galleries?.Any(e => e.GalleryId == id)).GetValueOrDefault();
        }
    }
}
