import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bill } from '../Bill';
import { TypeOfBill } from '../TypeOfBill';

@Injectable({
  providedIn: 'root'
})
export class BillTypesServiceService {

  constructor(private http : HttpClient) { }

  getBillTypes():Observable<any[]>{
    return this.http.get<any[]>('http://localhost/selectTypeOfBill.php');
  }
}
