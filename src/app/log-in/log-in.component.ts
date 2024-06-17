import { Component } from '@angular/core';
import { LogInService } from './log-in.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  constructor(private loginService : LogInService,
    private router : Router
  ) { }

  loginObj:any={
    USERNAME:'',
    PWD:''
  }

  onLogIn(form : NgForm){
    //debugger
    this.loginService.onLogin(this.loginObj).subscribe(
      (res :any) => {
        //debugger
        if (res.message =='Successful login.'){
          console.log(res);
          localStorage.setItem('token',res.token)
          //turn the authentification status to true
          this.loginService.isAuthentificatedSubject.next(true)
          //localStorage.setItem('currentUser',res.token)
          const Info=jwtDecode(res.token)
          console.log(Info)
          localStorage.setItem('currentUser',jwtDecode(res.token))
          console.log(localStorage.getItem("currentUser"))
          localStorage.setItem('username',res.username)
          localStorage.setItem('pwd',res.pwd)
          localStorage.setItem('manager',res.manager)
          localStorage.setItem('idSpace',res.idSpace)
          localStorage.setItem('idUser',res.userId)
          console.log(localStorage.getItem('manager'))
          this.router.navigate(['/home'])
          
          alert(res.message)
          
        }
        else{
          alert(res.message)
        }
        
    })
  }
  

}
