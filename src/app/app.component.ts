import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  users: any[] = [];

  constructor(private apiService: AppService) { }

  ngOnInit() {
    this.apiService.getAllUser().subscribe((data) => {
      this.users = data.data;
      console.log(data.data);
    });
    console.log("object");
  }


}