import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-product-component',
  standalone: false,
  templateUrl: './product-component.html',
  styleUrl: './product-component.css',
})
export class ProductComponent  implements OnInit{ 
  formGroupProduct: FormGroup;
  products: Product[] = [];


  constructor(private formBuilder: FormBuilder, private service: ProductService) {

    this.formGroupProduct = formBuilder.group({
      id: [''],
      name: [''],
      description: [''],
      price: ['']
    });

  }
  ngOnInit(): void {
     this.service.getAllProducts().subscribe(
          {
              next: json => this.products = json
          }
      );
  }
   save(){
     this.products.push(this.formGroupProduct.value);
    this.formGroupProduct.reset();
   }

  
}
