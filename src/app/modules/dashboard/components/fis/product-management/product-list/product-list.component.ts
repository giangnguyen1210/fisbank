import { Component, OnInit } from '@angular/core';
import { Product, ProductList } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  totalSize = 0;
  pageNumber = 1;
  pageSize = 10;
  maxSize = 5;

  productList: ProductList = { totalRecords: 0, data: [] };
  
  constructor(private productService: ProductService) { }
  base64ImageData: string = '';
  ngOnInit(): void {
    // Assume response.data.content is the bytea data from the backend

    this.productService.getProducts().subscribe(
      (data) => {
        this.productList.data = data.data;
        this.productList.totalRecords = data.totalRecords;
        // console.log(this.productList.data);
        console.log(this.productList.data);
        
       // Assume response.data.content is the bytea data from the backend
      // let base64ImageData = btoa(String.fromCharCode.apply(null, data));


      },
      (error) => {
        console.error('API Error:', error);
      }
    );

    this.productService.getProductList().subscribe(
      (data)=>{
        console.log(data);
      }
    )
  }
}
