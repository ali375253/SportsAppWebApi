using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SportsAppWebApi.Models;

namespace SportsAppWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CooperTestController : ControllerBase
    {
        private readonly SportsAppContext _context;

        public CooperTestController(SportsAppContext context)
        {
            _context = context;
        }

        // GET: api/CooperTest
        [HttpGet]
        public IEnumerable<CooperTest> GetCooperTests()
        {
            return _context.CooperTests;
        }

        // GET: api/CooperTest/5
        [HttpGet("{id}")]  
        public async Task<IActionResult> GetCooperTest([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cooperTest = await _context.CooperTests.FindAsync(id);

            if (cooperTest == null)
            {
                return NotFound();
            }

            return Ok(cooperTest);
        }

        // PUT: api/CooperTest/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCooperTest([FromRoute] int id, [FromBody] CooperTest cooperTest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cooperTest.Id)
            {
                return BadRequest();
            }

            _context.Entry(cooperTest).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CooperTestExists(id))
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

        // POST: api/CooperTest
        [HttpPost]
        public async Task<IActionResult> PostCooperTest([FromBody] CooperTest cooperTest)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CooperTests.Add(cooperTest);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCooperTest", new { id = cooperTest.Id }, cooperTest);
        }

        // DELETE: api/CooperTest/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCooperTest([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cooperTest = await _context.CooperTests.FindAsync(id);
            if (cooperTest == null)
            {
                return NotFound();
            }

            _context.CooperTests.Remove(cooperTest);
            await _context.SaveChangesAsync();

            return Ok(cooperTest);
        }

        private bool CooperTestExists(int id)
        {
            return _context.CooperTests.Any(e => e.Id == id);
        }
    }
}