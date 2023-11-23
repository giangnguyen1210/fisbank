import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8080'; // Replace with your local API URL

  constructor(private http: HttpClient) { }


  // Example GET request
  getAllUser(): Observable<any> {
    return this.http.post(`${this.apiUrl}/admin/users/list`,{});
  }


}
