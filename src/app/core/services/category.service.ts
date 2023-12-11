import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './header.service';
import { Category } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  // private apiUrl = 'http://localhost:4400/api/v1';
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private headerService: HeaderService) { }
  
  getCategoryList(): Observable<any> {
    const url = `${this.apiUrl}/admin/category/list`;
    const headers = this.headerService.getHeaders()
    return this.http.post(url,{},{headers} ).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  getTotalRecord(): Observable<any> {
    const url = `${this.apiUrl}/admin/category/list`;
    const headers = this.headerService.getHeaders()
    return this.http.post(url,{},{headers} ).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
