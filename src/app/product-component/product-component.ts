import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent {
  formGroupProduct: FormGroup;
  products: Product[] = [];


  constructor(private formBuilder: FormBuilder) {

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: ['tzbdumel'],
      description: ['fode muito'],
      price: ['69']
    });
  }
   save(){
     this.products.push(this.formGroupProduct.value);
    this.formGroupProduct.reset();
   }

  
}
