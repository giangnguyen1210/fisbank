import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/core/services/ap\bi.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getDataCategory().subscribe(
      (data) => {
        console.log('API Response:', data);
      },
      (error) => {
        console.error('API Error:', error);
      }
    );
  }
}
