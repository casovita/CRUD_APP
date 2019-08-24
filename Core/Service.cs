using Data;
using Data.Entities;
using Interfaces;
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

        public IEnumerable<Product> GetProducts()
        {
            return repository.GetProducts();
        }
    }
}
