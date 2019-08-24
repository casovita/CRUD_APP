using Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public interface IProductsRepository
    {
        IEnumerable<Product> GetProducts();
        Task Add(Product product);
    }
}
