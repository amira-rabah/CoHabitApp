import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteBillService {

  constructor(private http :HttpClient) { }
  deleteBill(bill_id:number):Observable<any>{
    console.log(bill_id);
    return this.http.delete("http://localhost/deleteBill.php/?id_bill="+bill_id);
  }
}
