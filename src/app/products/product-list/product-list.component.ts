import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  template: `
  <app-product-item [product]="product"
                      (quantityChange)="onQuantityChange($event)"
                      *ngFor="let product of products"></app-product-item>`,
  styles: []
})
export class ProductListComponent implements OnInit {
  public products: Array<Product> =[];

  constructor() { }

  ngOnInit() {
    this.products = [{
      name:'Test1',
      imageURL:'./assets/plush2.jpg',
      isOnSale: true,
      price: 15,
      quantityInCart:0,
      id:1
    },{
      name:'Test2',
      imageURL:'./assets/plush3.jfif',
      isOnSale: false,
      price: 18,
      quantityInCart:0,
      id:2
    },{
      id: 3,
      name:'Test3',
      imageURL:'./assets/plush1.jfif',
      isOnSale: false,
      price: 30,
      quantityInCart:0,
    
    }];
  }
  onQuantityChange(change: ProductQuantityChange) {
    const product  = this.products.find(prod => {
      return change.product.id === prod.id;
    });
      product!.quantityInCart += change.changeInQuantity;
  }
}
