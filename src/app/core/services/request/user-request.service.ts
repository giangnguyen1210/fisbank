import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HeaderService } from '../header.service';
import { Observable, map } from 'rxjs';
import { UserRequest } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private headerService: HeaderService) {

  }

  createUser(user: any): Observable<any> {
    const url = `${this.apiUrl}/admin/users/create`
    const headers = this.headerService.getHeaders()
    return this.http.post(url, user, { headers });
  }
  updateUser(user:any): Observable<any>{
    const headers = this.headerService.getHeaders();
    const url = `${this.apiUrl}/admin/users/edit`;
    return this.http.post(url, user, { headers });
    
  }

  deleteUser(user:any): Observable<any>{
    const headers = this.headerService.getHeaders();
    const url = `${this.apiUrl}/admin/users/delete`;
    return this.http.post(url, user, { headers });
  }
}
