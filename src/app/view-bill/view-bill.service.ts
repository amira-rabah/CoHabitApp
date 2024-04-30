import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewBillService {

  constructor( private http: HttpClient) { }
  getBills(idSpace : string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/selectBills.php?idSpace='+idSpace);
  }
}
