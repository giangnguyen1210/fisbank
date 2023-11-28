import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api/v1';
  constructor(private http: HttpClient) { }

 
  private readonly TOKEN_KEY = 'token';

  getJwtToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setJwtToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeJwtToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  
  
  login(user: { email: string; password: string }): Observable<any> {
    const loginUrl = `${this.apiUrl}/auth/login`; // Replace with your login API endpoint
    // Make an HTTP POST request to the login API endpoint
    return this.http.post(loginUrl, user).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        throw error;
      })
    );

  }


  getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
   
    // console.log(token);
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjZHNzQGdtYWlsLmNvbSIsImlhdCI6MTcwMTE4Mjc5NywiZXhwIjoxNzAxMTg0MjM3fQ.vUWSIuZnZI9dztO4dTNiO5X93AQbdqxNHRmzlomR0mZ8jdZeO_ctM4jvoycF0nkr8auwAQ-_Tohl0ndcuyGp2A`,
    });
  }
  getDataCategory(): Observable<any> {
    console.log(this.getHeaders());
    const url = `${this.apiUrl}/admin/category/list`; // Replace with your API endpoint
    const headers = this.getHeaders();
    return this.http.get(url, { headers });
    // return this.http.post(url, {}, {headers });
  }
}
