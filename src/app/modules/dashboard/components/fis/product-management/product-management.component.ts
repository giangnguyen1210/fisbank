import { Component } from '@angular/core';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrls: ['./product-management.component.scss']
})
export class ProductManagementComponent {
  constructor(private productService: ProductService) {}

  total: number | undefined;

  ngOnInit(): void {
    this.productService.getProductList().subscribe(
      (data) => {
        console.log('API Response:', data);
        this.total=data.totalRecords;
        console.log(this.total);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
}
