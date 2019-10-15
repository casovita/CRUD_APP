using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain.Interfaces;
using Domain.Models;

namespace Data
{
    public class ProductsRepository : IProductsRepository
    {
        private readonly CRUDContext _ctx;

        public ProductsRepository(CRUDContext ctx)
        {
            this._ctx = ctx;
        }
        public async Task Add(Product product)
        {
            _ctx.Products.Add(product);
            await _ctx.SaveChangesAsync();
        }

        public async Task<bool> Delete(int id)
        {
            var target = _ctx.Products.SingleOrDefault(a => a.Id == id);
            if (target == null) return false;

            _ctx.Products.Remove(target);
            await _ctx.SaveChangesAsync();
            return true;
        }

        public IEnumerable<Product> GetProducts()
        {
            return _ctx.Products;
        }
    }
}
