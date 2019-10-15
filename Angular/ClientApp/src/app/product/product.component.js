"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(service) {
        this.service = service;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.deleteProduct = function (id) {
        console.log(id);
        this.service.deleteProduct(id).subscribe((function (result) { return console.log(result); }));
    };
    __decorate([
        core_1.Input()
    ], ProductComponent.prototype, "product", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            selector: 'tr[app-product]',
            templateUrl: './product.component.html',
            styleUrls: ['./product.component.css']
        })
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map