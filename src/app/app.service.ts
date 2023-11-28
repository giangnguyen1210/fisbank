import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private apiUrl = 'http://localhost:8080/api/v1'; // Replace with your local API URL

  constructor(private http: HttpClient) { }
//   httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type': 'application/json',
//     //   "Access-Control-Allow-Origin": "*",
//     //   'Authorization': `Bearer ${localStorage.getItem('token')}`,
//     })
//   };

  

  

  // Example GET request
  getAllUser(): Observable<any> {
    const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjZHNzQGdtYWlsLmNvbSIsImlhdCI6MTcwMTE4Mjc5NywiZXhwIjoxNzAxMTg0MjM3fQ.vUWSIuZnZI9dztO4dTNiO5X93AQbdqxNHRmzlomR0mZ8jdZeO_ctM4jvoycF0nkr8auwAQ-_Tohl0ndcuyGp2A' // Add any other headers as needed
      });
    return this.http.post(`${this.apiUrl}/admin/users/list`,{}, {headers});
  }


}
