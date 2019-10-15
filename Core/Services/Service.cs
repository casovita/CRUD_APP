using Domain.Interfaces;
using Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class Service : IService
    {
        private readonly IProductsRepository repository;

        public Service(IProductsRepository repository)
        {
            this.repository = repository;
        }

        public Task CreateProductAsync(Product product)
        {
            return repository.Add(product);
        }

        public Task<bool> DeleteProduct(int id)
        {
            return repository.Delete(id);
        }

        public IEnumerable<Product> GetProducts()
        {
            return repository.GetProducts();
        }
    }
}
