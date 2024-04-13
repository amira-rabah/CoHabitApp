import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Maintain } from '../Maintain';

@Injectable({
  providedIn: 'root'
})
export class AddMaintainService {

  constructor(public http: HttpClient) { }

  sendMaintain(maintain : Maintain|any): Observable<any> {
    return this.http.post<any>('http://localhost/addMaintain.php',maintain);
  }
}
