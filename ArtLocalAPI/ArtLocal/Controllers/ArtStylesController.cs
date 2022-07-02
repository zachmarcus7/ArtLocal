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
    public class ArtStylesController : ControllerBase
    {
        private readonly ArtLocalDataContext _context;

        public ArtStylesController(ArtLocalDataContext context)
        {
            _context = context;
        }

        // GET: api/ArtStyles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArtStyle>>> GetArtStyle()
        {
          if (_context.ArtStyle == null)
          {
              return NotFound();
          }
            return await _context.ArtStyle.ToListAsync();
        }

        // GET: api/ArtStyles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtStyle>> GetArtStyle(Guid id)
        {
          if (_context.ArtStyle == null)
          {
              return NotFound();
          }
            var artStyle = await _context.ArtStyle.FindAsync(id);

            if (artStyle == null)
            {
                return NotFound();
            }

            return artStyle;
        }

        // PUT: api/ArtStyles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtStyle(Guid id, ArtStyle artStyle)
        {
            if (id != artStyle.ArtStyleId)
            {
                return BadRequest();
            }

            _context.Entry(artStyle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ArtStyleExists(id))
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

        // POST: api/ArtStyles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ArtStyle>> PostArtStyle(ArtStyle artStyle)
        {
          if (_context.ArtStyle == null)
          {
              return Problem("Entity set 'ArtLocalDataContext.ArtStyle'  is null.");
          }
            _context.ArtStyle.Add(artStyle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetArtStyle", new { id = artStyle.ArtStyleId }, artStyle);
        }

        // DELETE: api/ArtStyles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtStyle(Guid id)
        {
            if (_context.ArtStyle == null)
            {
                return NotFound();
            }
            var artStyle = await _context.ArtStyle.FindAsync(id);
            if (artStyle == null)
            {
                return NotFound();
            }

            _context.ArtStyle.Remove(artStyle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtStyleExists(Guid id)
        {
            return (_context.ArtStyle?.Any(e => e.ArtStyleId == id)).GetValueOrDefault();
        }
    }
}
