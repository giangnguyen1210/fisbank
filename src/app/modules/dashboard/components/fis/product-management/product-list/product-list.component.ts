import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, ProductList } from 'src/app/core/models/product.model';
import { ProductService } from 'src/app/core/services/product.service';

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
  
  constructor(private productService: ProductService,  private router: Router) { }
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

  
}
