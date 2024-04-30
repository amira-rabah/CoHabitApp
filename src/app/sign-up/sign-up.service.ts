import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private http :HttpClient) { }

  sendNewUser(Info : any):Observable<any[]>{
    return this.http.post<any[]>("http://localhost/signUp.php",Info);
  }
}
