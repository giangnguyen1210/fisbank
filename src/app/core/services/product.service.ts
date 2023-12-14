import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './header.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Color, Image, Product, ProductDetail, ProductList } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private headerService: HeaderService) {

  }

  getProducts(): Observable<ProductList> {
    const url = `${this.apiUrl}/admin/product/list`
    const headers = this.headerService.getHeaders()
    return this.http.post(url, {}, { headers }).pipe(
      map((response: any) => {
        console.log(response);
        return response;
      })
    );
  }

  getProductDetail(productId: any): Observable<ProductDetail[]> {
    const headers = this.headerService.getHeaders()
    return this.http.post(`${this.apiUrl}/admin/product/detail`, {productId},{headers}).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  // getItemDetail(productId: any): Observable<ProductDetail[]> {
  //   const headers = this.headerService.getHeaders()
  //   return this.http.post(`${this.apiUrl}/admin/product/item-detail`, {productId},{headers}).pipe(
  //     map((response: any) => {
  //       return response.data;
  //     })
  //   );
  // }

  
  

  getListColor(): Observable<any> {
    const headers = this.headerService.getHeaders()
    return this.http.post(`${this.apiUrl}/admin/product/color/list`,{headers}).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }

  getListSize(): Observable<any> {
    const headers = this.headerService.getHeaders()
    return this.http.post(`${this.apiUrl}/admin/product/size/list`,{headers}).pipe(
      map((response: any) => {
        return response.data;
      })
    );
  }
 
}
