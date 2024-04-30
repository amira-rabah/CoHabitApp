import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteMaintainService {

  constructor(private http : HttpClient) { }

  deleteMaintain(maintain_id:number):Observable<any>{
    console.log(maintain_id);
    return this.http.get<any>('http://localhost/deleteMaintain.php/?id_maintain='+maintain_id);
  }
}
