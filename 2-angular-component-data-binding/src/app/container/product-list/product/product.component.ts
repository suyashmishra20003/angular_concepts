import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements AfterViewInit{

  @Input() productDetails : any 
  @ViewChild('productRefernceVar') productRefernceVar:Component | undefined

  ngAfterViewInit(): void {

  }
}
