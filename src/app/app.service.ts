import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:4400/api/v1'; // Replace with your local API URL

  constructor(private http: HttpClient) { }

  // Example GET request
  getAllUser(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        
        'Authorization': `Bearer ${token}` // Add any other headers as needed
      });
    return this.http.post(`${this.apiUrl}/admin/users/list`,{}, {headers});
  }


}
