import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
  

  @Input() totalSize: number = 0;
  @Input() pageSize: number = 2;
  @Input() pageNumber: number = 1;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  productList: ProductList = { totalRecords: 0, data: [] };
  showModal: boolean = false;
  product!: ProductDetail;
  selectedProduct: any;
  form:any;
  
  constructor(private productService: ProductService, 
    private productRequestService: ProductRequestService, 
    private router: Router,
    private fb: FormBuilder ) { }
  base64ImageData: string = '';
  ngOnInit(): void {
    this.initForm();
    this.getService();
  }

  search(){
    const keyword = this.form.get('keyword').value;
    // Perform your search logic using the 'keyword' value
    console.log('Searching for:', keyword);
    this.getService();
    // Call your service or update data accordingly
  }
  getService() {
    const json = {
      page: this.pageNumber,
      limit: this.pageSize,
      keyword: this.form.get('keyword').value
    };
    this.productService.getProducts(json).subscribe(
      (data) => {
        this.productList.data = data.data;
        this.productList.totalRecords = data.totalRecords;
        // console.log(this.productList.data);
        this.totalSize = data.totalRecords;
        console.log(this.totalSize);
        // this.productList.data.
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
  get totalPages(): number {
    return Math.ceil(this.totalSize / this.pageSize);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, index) => index + 1);
  }

  changePage(newPage: number): void {
    if (newPage >= 1 && newPage <= this.totalPages && newPage !== this.pageNumber) {
      this.pageNumber = newPage;
      console.log(this.pageNumber);
      this.pageChange.emit(this.pageNumber);
    }
    this.getService();
  }

  changePage1(newPage: number, page: any): void {
    if (newPage >= 1 && newPage <= this.totalPages && newPage !== this.pageNumber) {
      this.pageNumber = newPage;
      console.log(newPage, page);
      this.pageChange.emit(this.pageNumber);
    }
  }
   initForm() {
    this.form = this.fb.group({
      productId: [],
      name: [null],
      description: [null],
      category: [null],
      discount: [],
      rate: [],
      quantity: [],
      sold: [],
      remain: [],
      price:[],
      size: [],
      color:[],
      image: [],
      keyword: []
    });
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

  exportFile(format: any){
    this.productService.exportFile({format}).subscribe(()=>{})
  }
}
