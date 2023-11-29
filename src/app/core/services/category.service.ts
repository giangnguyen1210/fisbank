import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'http://localhost:4400/api/v1';
  constructor(private http: HttpClient) { }
  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
  
    console.log('Token:', token);
    console.log('Headers:', headers);
  
    return headers;
  }
  getDataCategory(): Observable<any> {
    const url = `${this.apiUrl}/admin/category/list`;
    const headers = this.getHeaders();
  
    console.log('Headers in getDataCategory:', this.getHeaders());
  
    return this.http.post(url, {},{ headers });
  }
}
