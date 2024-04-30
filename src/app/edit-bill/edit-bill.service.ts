import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../Bill';

@Injectable({
  providedIn: 'root'
})
export class EditBillService {

  constructor(private http : HttpClient) { }

  getBillInfo(bill_id:number):Observable<any>{
    return this.http.get('http://localhost/selectBillById.php/?bill_id='+bill_id);
  }
  updateBill(bill : Bill|any):Observable<any>{
    return this.http.put('http://localhost/updateBill.php',bill);
  }
}
