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
    public class ArtworksController : ControllerBase
    {
        private readonly ArtLocalDataContext _context;

        public ArtworksController(ArtLocalDataContext context)
        {
            _context = context;
        }

        // GET: api/Artworks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artwork>>> GetArtwork()
        {
          if (_context.Artwork == null)
          {
              return NotFound();
          }
            return await _context.Artwork.ToListAsync();
        }

        // GET: api/Artworks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Artwork>> GetArtwork(Guid id)
        {
          if (_context.Artwork == null)
          {
              return NotFound();
          }
            var artwork = await _context.Artwork.FindAsync(id);

            if (artwork == null)
            {
                return NotFound();
            }

            return artwork;
        }

        // POST: api/Artworks
        [HttpPost]
        public async Task<ActionResult<Artwork>> PostArtwork(Artwork artwork)
        {
            if (_context.Artwork == null)
            {
                return Problem("Entity set 'ArtLocalDataContext.Artwork'  is null.");
            }
            _context.Artwork.Add(artwork);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArtwork", new { id = artwork.ArtworkId }, artwork);
        }

        // PUT: api/Artworks/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtwork(Guid id, Artwork artwork)
        {
            if (id != artwork.ArtworkId)
            {
                return BadRequest();
            }

            _context.Entry(artwork).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtworkExists(id))
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

        // DELETE: api/Artworks/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtwork(Guid id)
        {
            if (_context.Artwork == null)
            {
                return NotFound();
            }
            var artwork = await _context.Artwork.FindAsync(id);
            if (artwork == null)
            {
                return NotFound();
            }

            _context.Artwork.Remove(artwork);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtworkExists(Guid id)
        {
            return (_context.Artwork?.Any(e => e.ArtworkId == id)).GetValueOrDefault();
        }
    }
}
