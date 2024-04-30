import { Component,OnInit} from '@angular/core';
import { PayService } from './to-pay.service';
import {payment} from './payements.interface';

@Component({
  selector: 'app-to-pay',
  templateUrl: './to-pay.component.html',
  styleUrl: './to-pay.component.scss'
})
export class ToPayComponent implements OnInit {
  pays : payment [] = [];

  constructor(private payService: PayService) { }

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
  
    this.payService.getAmountsToPay(this.currentUser.idUser).subscribe(
      (data : payment[]) => {
        this.pays = data;
        console.log(this.pays); 
      },
      (error) => {
        console.error(error); 
      }
    );
  }
}
