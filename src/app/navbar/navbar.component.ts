import { Component,OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { LogInService } from '../log-in/log-in.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  constructor(private logservice : LogInService, private router:Router){}

  isConnected=false
  currentUser:any={
        'username':'',
        'idUser':'',
        'manager':false,
        'idSpace':''
  }
  ngOnInit(): void {
    if (typeof localStorage !=='undefined'){
       this.currentUser.username=localStorage.getItem('username')
       this.currentUser.manager=localStorage.getItem('manager')
       this.currentUser.idSpace=localStorage.getItem('idSpace')
       this.currentUser.idUser=localStorage.getItem('idUser')
  
    }  
    this.logservice.isAuthentificatedSubject.subscribe((isAuthentificated)=>{
      this.isConnected=isAuthentificated
    })
  }

  logout(){
    this.logservice.logout();
    this.router.navigate(['/'])
  }
  
}
