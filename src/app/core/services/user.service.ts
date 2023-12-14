import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from './header.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private headerService: HeaderService) { }
  
  getUserList(): Observable<any> {
    const url = `${this.apiUrl}/admin/users/list`;
    const headers = this.headerService.getHeaders()
    return this.http.post(url, {},{ headers });
  }

  getListRole(): Observable<any>{
    const url = `${this.apiUrl}/admin/common/list-role`;
    const headers = this.headerService.getHeaders()
    return this.http.post(url, {},{ headers });
  }

  getListStatus(): Observable<any>{
    const url = `${this.apiUrl}/admin/common/list-status`;
    const headers = this.headerService.getHeaders()
    return this.http.post(url, {},{ headers });
  }

}
