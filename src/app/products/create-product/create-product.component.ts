import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent {
  public message="";
  public productForm!: FormGroup;
  public product!: Product;

  constructor(private fb:FormBuilder) {
    this.createForm();
  }
  createForm(){
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
      imageUrl: ['', [Validators.required, Validators.pattern('./assets/[a-z0-9_-]*.[a-zA-Z]*')]],
      isOnSale: false
    });
  }

  createProduct(productForm:any){
    if (this.productForm.invalid){
      this.message = 'Please correct the errors and resubmit the form';
    } else {
      const product: Product = this.productForm.value;
      console.log('Creating Product', product);
    }
  }
  onCreate() {
    this.product = Object.assign({}, this.productForm.value);
    console.log('Saving stock', this.product);
    }

}
