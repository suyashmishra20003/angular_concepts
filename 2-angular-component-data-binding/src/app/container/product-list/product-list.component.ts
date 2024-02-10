import { Component, OnInit } from '@angular/core';
import { ProductData } from './product-lst';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: [ProductData]
  
})
export class ProductListComponent implements OnInit {
  newArray:any = []

  constructor(private productData: ProductData) {}
  ngOnInit(): void {
    this.newArray = this.productData.products
  }
 


}
