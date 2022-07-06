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
    public class InvoicesController : ControllerBase
    {
        private readonly ArtLocalDataContext _dbContext;

        public InvoicesController(ArtLocalDataContext context)
        {
            _dbContext = context;
        }

        // GET: api/Invoices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invoice>>> GetInvoice()
        {
            if (_dbContext.Invoice == null)
            {
                return NotFound();
            }

            return await _dbContext.Invoice.ToListAsync();
        }

        // GET: api/Invoices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> GetInvoice(int id)
        {
            if (_dbContext.Invoice == null)
            {
                return NotFound();
            }

            var invoice = await _dbContext.Invoice.FindAsync(id);

            if (invoice == null)
            {
                return NotFound();
            }

            return invoice;
        }

        // POST: api/Invoices
        [HttpPost]
        public async Task<ActionResult<Invoice>> PostInvoice(Invoice invoice)
        {

            // generate a new GUID for the invoice
            invoice.InvoiceId = Guid.NewGuid();

            if (_dbContext.Invoice == null)
            {
                return Problem("Entity set 'ArtLocalDataContext.Invoice'  is null.");
            }

            _dbContext.Invoice.Add(invoice);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetInvoice", new { id = invoice.InvoiceId }, invoice);
        }

        // PUT: api/Invoices/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvoice(Guid id, Invoice invoice)
        {
            if (id != invoice.InvoiceId)
            {
                return BadRequest();
            }

            _dbContext.Entry(invoice).State = EntityState.Modified;

            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoiceExists(id))
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

        // DELETE: api/Invoices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoice(Guid id)
        {
            if (_dbContext.Invoice == null)
            {
                return NotFound();
            }
            var invoice = await _dbContext.Invoice.FindAsync(id);
            if (invoice == null)
            {
                return NotFound();
            }

            _dbContext.Invoice.Remove(invoice);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool InvoiceExists(Guid id)
        {
            return (_dbContext.Invoice?.Any(e => e.InvoiceId == id)).GetValueOrDefault();
        }
    }
}
