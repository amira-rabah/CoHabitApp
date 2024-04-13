import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ViewMaintainService {

  constructor(private http : HttpClient) { }
  getMaintains(): Observable <any[]>  {
    return this.http.get<any[]>('http://localhost/selectMaintains.php');
  }
}
