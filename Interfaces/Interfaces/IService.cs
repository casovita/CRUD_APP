using Domain.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Domain.Interfaces
{
    public interface IService
    {
        IEnumerable<Product> GetProducts();
        Task CreateProductAsync(Product product);
        Task<bool> DeleteProduct(int id);
    }
}
