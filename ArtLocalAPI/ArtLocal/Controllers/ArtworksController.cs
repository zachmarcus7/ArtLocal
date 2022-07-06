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
        private readonly ArtLocalDataContext _dbContext;

        public ArtworksController(ArtLocalDataContext context)
        {
            _dbContext = context;
        }

        // GET: api/Artworks
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Artwork>>> GetArtwork()
        {
          if (_dbContext.Artwork == null)
          {
              return NotFound();
          }
            return await _dbContext.Artwork.ToListAsync();
        }

        // GET: api/Artworks/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Artwork>> GetArtwork(Guid id)
        {
          if (_dbContext.Artwork == null)
          {
              return NotFound();
          }
            var artwork = await _dbContext.Artwork.FindAsync(id);

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
            // generate a new GUID for the artwork
            artwork.ArtworkId = Guid.NewGuid();

            if (_dbContext.Artwork == null)
            {
                return Problem("Entity set 'ArtLocalDataContext.Artwork'  is null.");
            }

            _dbContext.Artwork.Add(artwork);
            await _dbContext.SaveChangesAsync();

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

            _dbContext.Entry(artwork).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
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
            if (_dbContext.Artwork == null)
            {
                return NotFound();
            }
            var artwork = await _dbContext.Artwork.FindAsync(id);
            if (artwork == null)
            {
                return NotFound();
            }

            _dbContext.Artwork.Remove(artwork);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtworkExists(Guid id)
        {
            return (_dbContext.Artwork?.Any(e => e.ArtworkId == id)).GetValueOrDefault();
        }
    }
}
