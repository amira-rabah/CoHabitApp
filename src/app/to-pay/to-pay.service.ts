import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayService {

  constructor(private http: HttpClient) { }
  getAmountsToPay(idUser : string): Observable<any> {
    return this.http.get<any>('http://localhost/toPay.php?id_user='+idUser);
  }
}
