import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';

@Component({
  selector: 'tr[app-product]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() public product: Product;

  constructor(private service: ProductService) {

  }

  ngOnInit() {
  }

  deleteProduct(id: number) {
    console.log(id)
    this.service.deleteProduct(id).subscribe((result => console.log(result)))
  }
}
