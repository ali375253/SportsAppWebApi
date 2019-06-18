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
    public class CooperTestDetailController : ControllerBase
    {
        private readonly SportsAppContext _context;

        public CooperTestDetailController(SportsAppContext context)
        {
            _context = context;
        }

        // GET: api/CooperTestDetail
        [HttpGet]
        public IEnumerable<CooperTestDetail> GetCooperTestDetails()
        {
            return _context.CooperTestDetails;
        }

        // GET: api/CooperTestDetail/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetCooperTestDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cooperTestDetail = await _context.CooperTestDetails.FindAsync(id);

            if (cooperTestDetail == null)
            {
                return NotFound();
            }

            return Ok(cooperTestDetail);
        }

        // PUT: api/CooperTestDetail/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCooperTestDetail([FromRoute] int id, [FromBody] CooperTestDetail cooperTestDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != cooperTestDetail.Id)
            {
                return BadRequest();
            }

            _context.Entry(cooperTestDetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CooperTestDetailExists(id))
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

        // POST: api/CooperTestDetail
        [HttpPost]
        public async Task<IActionResult> PostCooperTestDetail([FromBody] CooperTestDetail cooperTestDetail)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.CooperTestDetails.Add(cooperTestDetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCooperTestDetail", new { id = cooperTestDetail.Id }, cooperTestDetail);
        }

        // DELETE: api/CooperTestDetail/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCooperTestDetail([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var cooperTestDetail = await _context.CooperTestDetails.FindAsync(id);
            if (cooperTestDetail == null)
            {
                return NotFound();
            }

            _context.CooperTestDetails.Remove(cooperTestDetail);
            await _context.SaveChangesAsync();

            return Ok(cooperTestDetail);
        }

        private bool CooperTestDetailExists(int id)
        {
            return _context.CooperTestDetails.Any(e => e.Id == id);
        }
    }
}