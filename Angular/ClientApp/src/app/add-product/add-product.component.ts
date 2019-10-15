import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;

  constructor(private service: ProductService) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    let name = '';
    let amount = 0;
    this.form = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'amount': new FormControl(amount, Validators.required),
    });
  }

  onSubmit() {
    const newProduct = new Product(
      0,
      this.form.value['amount'],
      this.form.value['name'],
    );
    this.service.addProduct(newProduct).subscribe(result => console.log(result));
  }
}
