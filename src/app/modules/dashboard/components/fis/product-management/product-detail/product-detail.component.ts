import { Component, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductDetail } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductRequestService } from 'src/app/core/services/request/product-request.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{

  productDetail: ProductDetail[] = [];
  productDetail1: ProductDetail | undefined;
  productId!: string;
  editing: boolean = false;
  editingDetail: boolean = false;
  productForm!: any;
  productFormDetail!: any;
  productForms: FormGroup[] = [];
  loading: boolean = false;
  constructor(private productService: ProductService, private productRequestService: ProductRequestService,private route: ActivatedRoute , private fb: FormBuilder) {
    
  }
  ngOnInit(): void{
    
    this.productId = (this.route.snapshot.params['productId']);
    console.log('Product Id:', this.productId);
    console.log(this.editingDetail);

    this.productService.getProductDetail(this.productId).subscribe(
      (data) => {
        // Xử lý kết quả tại đây
        console.log('Product Detail:', data);
        this.productDetail = data;
        console.log(this.productDetail);
      },
      (error) => {
        // Xử lý lỗi tại đây
        console.error('Error fetching product detail:', error);
      }
    );

  }
  
  editProduct(id: string){
    console.log(id);
    this.editing = true;
    console.log(this.editing);
   
    this.productForm = this.fb.group({
      productId: this.productDetail[0].productId,
      description: this.productDetail[0].description,
      material: this.productDetail[0].material,
      price: this.productDetail[0].price,
    });
   
  }

  
  editProductDetail(productId: string, size: number, color: number){
    this.editingDetail = true;
    this.productDetail1 = this.productDetail.find(product => product.productId === productId && product.size === size && product.color === color);

    this.productFormDetail = this.fb.group({
        productId: [this.productDetail1?.productId],
        color: [this.productDetail1?.color],
        size: [this.productDetail1?.size],
        quantity: [this.productDetail1?.quantity],
        sold: [this.productDetail1?.sold],
        remain: [this.productDetail1?.remain],
        discount: [this.productDetail1?.discount]
      });
      // console.log(this.productDetail1?.productId);
      console.log(this.productFormDetail.value);
  }
 
  
  updateDetail(productId: string, size: number, color: number){
    this.editingDetail = false;
    const json = {
      ...this.productFormDetail.value
    }
    console.log(this.productFormDetail.value);
    
    // this.productRequestService.updateProductDetail(json).subscribe(
    //   (response)=>{
    //     console.log(response);
    //   }
    // )
  }

  

  update(id: string){
    this.loading = true;
    this.editing = false;
    const json = {
      ...this.productForm.value
    }
    if (this.productForm.valid) {
      // const productData = this.productForm.value;

      // console.log(productData);
      this.productRequestService.updateProduct(json).subscribe(
        (response) => {
          console.log('Product updated successfully:', response);
          // You can add further logic or navigate to another page on success
        },
        (error) => {
          console.error('Error updating product:', error);
        }
      );
    } else {
      console.log('Form is invalid. Please check your inputs.');
    }
    console.log(json);
    setTimeout(() => {
      // Công việc hoàn thành, đặt this.loading = false;
      // location.reload();
      this.loading = false;
    }, 1000);
  }
}
