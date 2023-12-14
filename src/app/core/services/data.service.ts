// Trong một service hoặc component chia sẻ dữ liệu
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private dataSubject = new BehaviorSubject<any>(null);
  data$ = this.dataSubject.asObservable();

  updateData(newData: any) {
    this.dataSubject.next(newData);
  }
}
