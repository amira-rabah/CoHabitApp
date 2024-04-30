import { HttpClient } from '@angular/common/http';
import { Injectable ,inject  } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject  , tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogInService {

  private readonly JWT_TOKEN ='JWT_TOKEN'
   loggedUser?:string
  isAuthentificatedSubject = new BehaviorSubject<boolean>(false)

  private http= inject(HttpClient)

  constructor() {
    
   }
  onLogin(obj :any):Observable<any>{
    
      return this.http.post('http://localhost/logIn.php',obj).pipe(
        tap(tokens => this.doLoginUser(obj, obj.USERNAME , tokens))
      ) 
  }

  private doLoginUser(obj :any, username:string, tokens:any){
    this.loggedUser = username;
    this.storeJwtToken(tokens.jwt )
    //turnn the authentification status to true
    this.isAuthentificatedSubject.next(true)
  }

  private storeJwtToken(jwt : string ){
    localStorage.setItem(this.JWT_TOKEN,jwt)
  }

  logout(){
    //remove the jwt from the local storage 
    localStorage.removeItem(this.JWT_TOKEN)
    localStorage.clear()
    //turn the authentification status to false
    this.isAuthentificatedSubject.next(false)
  }

  
}
