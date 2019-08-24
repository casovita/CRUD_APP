using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Data.Entities;

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

        public IEnumerable<Product> GetProducts()
        {
            return _ctx.Products;
        }
    }
}
