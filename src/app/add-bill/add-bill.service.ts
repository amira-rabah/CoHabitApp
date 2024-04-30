import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Bill } from '../Bill';

@Injectable({
  providedIn: 'root'
})
export class AddBillService {

  constructor(private http : HttpClient) { }

  sendBill(bill:Bill):Observable<any>{
    return this.http.post('http://localhost/addBill.php',bill)
  }
}
