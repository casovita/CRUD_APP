using Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Data
{
    public class CRUDContext : DbContext
    {
        public CRUDContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Product> Products { get; set; }
    }
}
