﻿using Data.Entities;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Interfaces
{
    public interface IService
    {
        IEnumerable<Product> GetProducts();
        Task CreateProductAsync(Product product);
    }
}
