
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddMemberService {

  constructor(private http: HttpClient) { }

  getMember(username : string): Observable<any[]> {
    return this.http.get<any[]>('http://localhost/AddMember.php?username=' + username );
  }
}
