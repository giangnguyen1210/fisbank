import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-summary',
  templateUrl: './user-summary.component.html',
  styleUrls: ['./user-summary.component.scss']
})
export class UserSummaryComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  total: number | undefined;

  ngOnInit(): void {
    this.userService.getUserList().subscribe(
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
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
