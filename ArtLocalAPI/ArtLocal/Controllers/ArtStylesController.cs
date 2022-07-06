﻿using System;
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
        private readonly ArtLocalDataContext _dbContext;

        public ArtStylesController(ArtLocalDataContext context)
        {
            _dbContext = context;
        }

        // GET: api/ArtStyles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ArtStyle>>> GetArtStyle()
        {
          if (_dbContext.ArtStyle == null)
          {
              return NotFound();
          }
            return await _dbContext.ArtStyle.ToListAsync();
        }

        // GET: api/ArtStyles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ArtStyle>> GetArtStyle(Guid id)
        {
          if (_dbContext.ArtStyle == null)
          {
              return NotFound();
          }
            var artStyle = await _dbContext.ArtStyle.FindAsync(id);

            if (artStyle == null)
            {
                return NotFound();
            }

            return artStyle;
        }

        // POST: api/ArtStyles
        [HttpPost]
        public async Task<ActionResult<ArtStyle>> PostArtStyle(ArtStyle artStyle)
        {
            // generate a new GUID for the art style
            artStyle.ArtStyleId = Guid.NewGuid();

            if (_dbContext.ArtStyle == null)
            {
                return Problem("Entity set 'ArtLocalDataContext.ArtStyle'  is null.");
            }
            _dbContext.ArtStyle.Add(artStyle);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetArtStyle", new { id = artStyle.ArtStyleId }, artStyle);
        }

        // PUT: api/ArtStyles/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutArtStyle(Guid id, ArtStyle artStyle)
        {
            if (id != artStyle.ArtStyleId)
            {
                return BadRequest();
            }

            _dbContext.Entry(artStyle).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
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

        // DELETE: api/ArtStyles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteArtStyle(Guid id)
        {
            if (_dbContext.ArtStyle == null)
            {
                return NotFound();
            }
            var artStyle = await _dbContext.ArtStyle.FindAsync(id);
            if (artStyle == null)
            {
                return NotFound();
            }

            _dbContext.ArtStyle.Remove(artStyle);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool ArtStyleExists(Guid id)
        {
            return (_dbContext.ArtStyle?.Any(e => e.ArtStyleId == id)).GetValueOrDefault();
        }
    }
}
