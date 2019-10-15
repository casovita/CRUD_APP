using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IProductsRepository
    {
        IEnumerable<Product> GetProducts();
        Task Add(Product product);
        Task<bool> Delete(int id);
    }
}
