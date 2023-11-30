import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './header.service';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { ProductList } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private headerService: HeaderService) { }
  
  getProductList(): Observable<any> {
    const url = `${this.apiUrl}/admin/product/list`;
    const headers = this.headerService.getHeaders()
    return this.http.post(url, {},{ headers });
  }

  getProducts(): Observable<ProductList> {
    const url = `${this.apiUrl}/admin/product/list`    
    const headers = this.headerService.getHeaders()
    return this.http.post(url,{},{headers} ).pipe(
      map((response: any) => {
        console.log(response);
        return this.mapApiResponseToProductList(response);
      })
    );
  }


  private mapApiResponseToProductList(apiResponse: ProductList): ProductList {
    return {
      totalRecords: apiResponse.totalRecords,
      data: apiResponse.data.map((product: any) => ({
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.image ? product.image.map((img: any) => ({ name: img.name, content: img.content })) : [],
        rate: product.rate,
        material: product.material,
        size: product.size ? product.size.map((s: any) => ({ size: s.size, quantity: s.quantity, sold: s.sold, remain: s.remain })) : [],
        number: product.number,
      })),
    };
  }
}
