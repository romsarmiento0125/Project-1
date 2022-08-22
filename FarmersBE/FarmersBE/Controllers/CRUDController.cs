using FarmersBE.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FarmersBE.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CRUDController : ControllerBase
    {
        private readonly DataContext _context;

        public CRUDController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<CRUD>>> Get()
        {
            return Ok(await _context.CRUD.ToListAsync());
        }

        [HttpPost]
        public async Task<ActionResult<List<CRUD>>> Create(CRUD create)
        {
            _context.CRUD.Add(create);
            await _context.SaveChangesAsync();

            return Ok(await _context.CRUD.ToListAsync());
        }

        [HttpPut]
        public async Task<ActionResult<List<CRUD>>> Update(CRUD update)
        {
            var dbCRUD = await _context.CRUD.FindAsync(update.Id);
            if (dbCRUD == null)
            {
                return BadRequest("Hero not found.");
            }

            dbCRUD.Name = update.Name;

            await _context.SaveChangesAsync();

            return Ok(await _context.CRUD.ToListAsync());
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<List<CRUD>>> Delete(int id)
        {
            var dbCRUD = await _context.CRUD.FindAsync(id);
            if (dbCRUD == null)
            {
                return BadRequest("Hero not found.");
            }

            _context.CRUD.Remove(dbCRUD);

            await _context.SaveChangesAsync();

            return Ok(await _context.CRUD.ToListAsync());
        }
    }
}
