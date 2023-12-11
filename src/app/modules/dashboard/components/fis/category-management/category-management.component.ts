import { Component } from '@angular/core';
import { CategoryService } from 'src/app/core/services/category.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent {
  constructor(private categoryService: CategoryService) {}

  total: number | undefined;

  ngOnInit(): void {
    this.categoryService.getTotalRecord().subscribe(
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
