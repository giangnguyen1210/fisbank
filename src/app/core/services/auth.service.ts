import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn(): boolean {
    return !!localStorage.getItem(this.TOKEN_KEY);
  }

  private apiUrl = 'http://localhost:4400/api/v1';
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
    const loginUrl = `${this.apiUrl}/auth/login`; 
    return this.http.post(loginUrl, user).pipe(
      map((response) => {
        return response;
      }),
      catchError((error) => {
        throw error;
      })
    );

  }

  logout(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
  
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
