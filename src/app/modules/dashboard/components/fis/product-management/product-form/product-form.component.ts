import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Category, Color, Product, Size } from 'src/app/core/models/product.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductRequestService } from 'src/app/core/services/request/product-request.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit{
  // @Input listProduct: any
  form: any;
  isSubmit = false;
  nameImage: any;
  base64Image: string ='';
  productForm!: any;
  colorForm!: FormGroup;
  sizeForm!: FormGroup;
  listProduct: any;
  
  categories: Category[] = [];
  colors: Color[] = [];
  sizes: Size[] = [];

  constructor(private productService: ProductService, private productRequestService: ProductRequestService, private categoryService: CategoryService, private fb: FormBuilder) {
    
  }
  ngOnInit(): void{
    this.categoryService.getCategoryList().subscribe(
      (data: Category[]) => {
        console.log(data);
        this.categories = data;
      }
    )
    this.productService.getListColor().subscribe(
      (data: Color[]) =>{
        // console.log(data);
        this.colors = data;
        // console.log(this.colors);
      }
    )
    this.productService.getListSize().subscribe(
      (data: Size[]) =>{
        this.sizes = data;
      }
    )
    // this.productService.
    this.initProductForm();
  }

  initProductForm(){
    this.productForm = this.fb.group({
      name: [null, [Validators.required]],
      description: [''],
      material: [''],
      quantity: [0],
      sold: [0],
      remain: [0],
      price: [0],
      category: [''],
      rate: [0],
      categoryId: [0],
      colorId: [0],
      sizeId: [0],
      image: [null, [Validators.required]],
    });
  }
  addFile(event: any) {
    if (event.target.files && event.target.files[0]) {
        this.nameImage = event.target.files[0].name;
        var reader = new FileReader();
        reader.onload = (event: any) => {
            this.base64Image = event.target.result;
        }
        reader.readAsDataURL(event.target.files[0]);
    }
  }
  onSubmit() {
    // Assuming you have a form submit function
    // Extract data from the form and send it to the service
    this.isSubmit = true;
    const json = {
      ...this.productForm.value,
      image: this.base64Image
    }

    if (this.productForm.valid) {
      // const productData = this.productForm.value;

      // console.log(productData);
      this.productRequestService.addProduct(json).subscribe(
        (response) => {
          console.log('Product added successfully:', response);
          // You can add further logic or navigate to another page on success
        },
        (error) => {
          console.error('Error adding product:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please check your inputs.');
    }
  }
  get f() {
    return this.productForm.controls;
  }
}