import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Maintain } from '../Maintain';

@Injectable({
  providedIn: 'root'
})
export class EditMaintainService {

  constructor(private http:HttpClient) { }

  getMaintainInfo(maintain_id:number):Observable<any>{

    return this.http.get<any[]>('http://localhost/selectMaintainById.php/?maintain_id='+maintain_id);
  }
  updateMaintain(maintain: Maintain|any):Observable<any>{
    return this.http.put('http://localhost/updateMaintain.php',maintain);

  }
}
