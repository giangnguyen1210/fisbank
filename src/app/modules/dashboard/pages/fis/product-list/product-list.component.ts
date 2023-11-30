import { Component, OnInit } from '@angular/core';
import { Product, ProductList } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productList: ProductList = { totalRecords: 0, data: [] };
  
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (data) => {
        this.productList.data = data.data;
        this.productList.totalRecords = data.totalRecords;
        console.log(this.productList.data);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
    console.log(this.productList.data);
  }
}
