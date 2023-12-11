import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from '../header.service';
import { ProductRequest } from '../../models/product.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductRequestService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private headerService: HeaderService) {

  }

  addProduct(product: ProductRequest): Observable<any> {
    const url = `${this.apiUrl}/admin/product/add`
    const headers = this.headerService.getHeaders()
    return this.http.post(url, product, { headers });
  }
  updateProduct(product:ProductRequest): Observable<any>{
    const headers = this.headerService.getHeaders();
    const url = `${this.apiUrl}/admin/product/edit`;
    return this.http.post(url, product, { headers });
    
  }
  updateProductDetail(product: ProductRequest): Observable<any>{
    const headers = this.headerService.getHeaders();
    const url = `${this.apiUrl}/admin/product/edit-detail`;
    return this.http.post(url, product, { headers });
  }
}
