import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductQuantityChange } from 'src/app/model/product-quantity-change';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductItemComponent {
  @Input() public product!: Product;
  @Output() public quantityChange: EventEmitter<ProductQuantityChange> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  incrementInCart() {
    this.quantityChange.emit({product: this.product, changeInQuantity: 1});
  }

  decrementInCart() {
    if (this.product.quantityInCart > 0) {
      this.quantityChange.emit({product: this.product, changeInQuantity: -1});
    }
  }
}
