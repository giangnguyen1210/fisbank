import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductDetail, ProductList, ProductRequest } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';
import { ProductRequestService } from 'src/app/core/services/request/product-request.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  totalSize = 0;
  pageSize = 10;
  pageNumber = 1;
  productList: ProductList = { totalRecords: 0, data: [] };
  showModal: boolean = false;
  product!: ProductDetail;
  selectedProduct: any;
  
  constructor(private productService: ProductService, private productRequestService: ProductRequestService, private router: Router) { }
  base64ImageData: string = '';
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.productList.data = data.data;
        this.productList.totalRecords = data.totalRecords;
        // console.log(this.productList.data);
        console.log(this.productList.data);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  onRowClick(product_id: string): void {
    console.log('Clicked on product with name:', product_id);
    // Thực hiện các hành động khác tại đây
  }
  encodeProductName(name: string): string {
    return encodeURIComponent(name);

  }
  openDeleteModal(productId:string): void {
    this.showModal = true;
    console.log("hello");
    console.log(productId);
    this.selectedProduct = this.productList.data.find(product => product.productId === productId);
  }
  
  cancelDelete(): void {
    this.showModal = false;
  }

  confirmDelete(productId:string): void {
    // Implement the logic to delete the item
    // You can make an API call or perform any necessary action
    console.log('Item deleted!');
   console.log(productId);
   console.log(this.productList.data);
   console.log(this.productList.data.find(prd => prd.productId === productId));


   
    // this.productRequestService.deleteProduct({}).subscribe(
    //   (response)=>{
    //     console.log(response);
    //     if(response.totalRecords==0){
    //       console.log('Navigating to /dashboard/product');
    //       this.router.navigate(["/dashboard/product"]);
    //     }
    //   }
    // )
    // Close the modal after deletion
    this.showModal = false;
    if (this.selectedProduct) {
      // Use this.selectedProduct.productId for deletion logic
      console.log('Confirming deletion for productId:', this.selectedProduct.productId);
      
      // Clear the selected product and close the modal
      this.productRequestService.deleteProduct(this.selectedProduct).subscribe(
        (response)=>{
          console.log(response);
          if(response.totalRecords==0){
            console.log('Navigating to /dashboard/product');
            this.router.navigate(["/dashboard/product"]);
          }
          else{
            window.location.reload();
          }
        }
      )
      this.selectedProduct = null;
      this.showModal = false;
    }
  }
}
