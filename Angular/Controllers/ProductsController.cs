﻿using Interfaces;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Angular.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private readonly IService service;

        public ProductsController(IService service)
        {
            this.service = service;
        }

        [HttpGet("[action]")]
        public ActionResult ReadProducts()
        {
            try
            {
                var products = service.GetProducts();
                return Ok(products);
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }

        [HttpPost("[action]")]
        public async Task<ActionResult> CreateProduct([FromBody]Product product)
        {
            try
            {
                await service.CreateProductAsync(new Data.Entities.Product { Name = product.Name, Amount = product.Amount });
                return Ok();
            }
            catch (System.Exception ex)
            {
                throw;
            }
        }


    }
}
