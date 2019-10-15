using Core;
using Data;
using Domain.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace IoC
{
    public static class DependencyContainer
    {

        public static void RegisterServices(IServiceCollection services)
        {
            services.AddTransient<IService, Service>();
            services.AddTransient<IProductsRepository, ProductsRepository>();

            services.AddTransient<CRUDContext>();
        }
    }
}
