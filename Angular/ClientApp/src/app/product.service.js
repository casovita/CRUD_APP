"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var httpOptions = {
    headers: new http_1.HttpHeaders({
        'Content-Type': 'application/json',
    })
};
var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.baseUrl = 'api/Products';
    }
    ProductService.prototype.getProducts = function () {
        return this.http.get(this.baseUrl + "/ReadProducts");
    };
    ProductService.prototype.addProduct = function (newProduct) {
        return this.http.post(this.baseUrl + "/CreateProduct", newProduct)
            .pipe(operators_1.map(function (response) { return response.ok; }));
    };
    ProductService.prototype.deleteProduct = function (id) {
        return this.http.delete(this.baseUrl + "/" + id, httpOptions)
            .pipe(operators_1.map(function (response) { return response.ok; }));
    };
    ProductService.prototype.editProduct = function (editedProduct) {
        return this.http.put(this.baseUrl + "/EditProduct", editedProduct)
            .pipe(operators_1.map(function (response) { return response.ok; }));
    };
    ProductService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProductService);
    return ProductService;
}());
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map