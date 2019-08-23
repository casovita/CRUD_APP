using Core;
using Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace IoC
{
    public static class DependencyContainer
    {

        public static void RegisterServices(IServiceCollection services)
        {
            services.AddSingleton<IService, Service>();
        }
    }
}
