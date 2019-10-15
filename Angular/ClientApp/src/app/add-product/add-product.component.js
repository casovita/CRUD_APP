"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var product_1 = require("../models/product");
var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(service) {
        this.service = service;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    AddProductComponent.prototype.initForm = function () {
        var name = '';
        var amount = 0;
        this.form = new forms_1.FormGroup({
            'name': new forms_1.FormControl(name, forms_1.Validators.required),
            'amount': new forms_1.FormControl(amount, forms_1.Validators.required),
        });
    };
    AddProductComponent.prototype.onSubmit = function () {
        var newProduct = new product_1.Product(0, this.form.value['amount'], this.form.value['name']);
        this.service.addProduct(newProduct).subscribe(function (result) { return console.log(result); });
    };
    AddProductComponent = __decorate([
        core_1.Component({
            selector: 'app-add-product',
            templateUrl: './add-product.component.html',
            styleUrls: ['./add-product.component.css']
        })
    ], AddProductComponent);
    return AddProductComponent;
}());
exports.AddProductComponent = AddProductComponent;
//# sourceMappingURL=add-product.component.js.map