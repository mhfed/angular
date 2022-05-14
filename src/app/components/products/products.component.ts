import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/models/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productName: string = '';
  public componentName = 'Products Component';
  public isStatus: boolean = true;
  public products: IProduct[] = [
    { id: 1, name: 'Product A', price: 100, status: true },
    { id: 2, name: 'Product B', price: 200, status: false },
    { id: 3, name: 'Product C', price: 300, status: true },
  ];
  constructor() {}
  onHandleClick() {
    this.isStatus = !this.isStatus;
  }
  onHandleRemove(id: number) {
    this.products = this.products.filter((product) => product.id !== id);
  }
  ngOnInit(): void {}
}
