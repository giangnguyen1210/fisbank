import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  users: any[] = [];

  constructor(private apiService: AppService) { }

  ngOnInit() {
    this.apiService.getAllUser().subscribe((data) => {
      this.users = data;
    });
    console.log("object");
  }


}