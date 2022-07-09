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
    public class CustomersController : ControllerBase
    {
        private readonly ArtLocalDataContext _dbContext;

        public CustomersController(ArtLocalDataContext context)
        {
            _dbContext = context;
        }

        // Get all Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            if (_dbContext.Customers == null)
            {
                return NotFound();
            }
            return await _dbContext.Customers.ToListAsync();
        }

        // Get a specific Customer
        [HttpGet("{id}")]                                  
        public async Task<ActionResult<Customer>> GetCustomer(Guid id)
        {
            if (_dbContext.Customers == null)
            {
                return NotFound();
            }
            var customer = await _dbContext.Customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        // Create a new Customer
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            // generate a new GUID for the customer
            customer.CustomerId = Guid.NewGuid();

            if (_dbContext.Customers == null)
            {
                return Problem("Entity set 'ArtLocalDataContext.Customers'  is null.");
            }

            _dbContext.Customers.Add(customer);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetCustomer", new { id = customer.CustomerId }, customer);
        }

        // Authenticate a Customer's login request
        // localhost:7195/api/Customers/Authentication                                        
        [HttpPost("Authentication")]
        public async Task<IActionResult> Authenticate([FromBody] Customer customer)
        {
            // check if the customer exists in the database
            Customer testCustomer = await _dbContext.Customers.FirstOrDefaultAsync(user => user.Username == customer.Username);

            if (testCustomer == null)
            {
                return NoContent();
            }

            // test if the credentials match
            if ((customer.Username == testCustomer.Username) &&
                (customer.Password == testCustomer.Password))
            {
                return Ok(testCustomer);
            }
            return NoContent();
           
        }

        // DELETE: api/Customers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(Guid id)
        {
            if (_dbContext.Customers == null)
            {
                return NotFound();
            }
            var customer = await _dbContext.Customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound();
            }

            _dbContext.Customers.Remove(customer);
            await _dbContext.SaveChangesAsync();

            return NoContent();
        }

        private bool CustomerExists(Guid id)
        {
            return (_dbContext.Customers?.Any(e => e.CustomerId == id)).GetValueOrDefault();
        }
    }
}
