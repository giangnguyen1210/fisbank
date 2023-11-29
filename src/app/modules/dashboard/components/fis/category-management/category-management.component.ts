import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-category-management',
  templateUrl: './category-management.component.html',
  styleUrls: ['./category-management.component.scss']
})
export class CategoryManagementComponent implements OnInit {
  constructor(private apiService: AuthService) {}

  total: number | undefined;

  ngOnInit(): void {
    this.apiService.getDataCategory().subscribe(
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
