import { Component , OnInit } from '@angular/core';
import { Bill } from '../Bill';
import { AddBillService } from './add-bill.service';
import { BillTypesServiceService } from '../billTypesService/bill-types-service.service';
import { TypeOfBill } from '../TypeOfBill';
import { NgModule } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-bill',
  templateUrl: './add-bill.component.html',
  styleUrl: './add-bill.component.css'
})
export class AddBillComponent implements OnInit{

  bill :Bill={
    ID_BILL : 0 ,
    BILL_NUM : '' ,
    DESCRIPTION : '', 
    AMOUNT : 0,
    DEADLINE : new Date,
    PAYED : false,
    ID_TYPE : 0 ,
    BILL_TYPE_NAME:'',
    ID_USER: 0
  };
  currentUser:any={
    'username':'',
    'idUser':'',
    'manager':false,
    'idSpace':''
  }
  billTypes : TypeOfBill[] =[];

  constructor( 
    private addBillService : AddBillService,
    private billTypesService : BillTypesServiceService
  ){}

  
ngOnInit(): void {
  if (typeof localStorage !=='undefined'){
    this.currentUser.username=localStorage.getItem('username')
    this.currentUser.manager=localStorage.getItem('manager')
    this.currentUser.idSpace=localStorage.getItem('idSpace')
    this.currentUser.idUser=localStorage.getItem('idUser')

  }  

    this.billTypesService.getBillTypes().subscribe(
      (data) => {
        this.billTypes = data;
        console.log(this.billTypes);
      }
    )
  }

  addBill(form : NgForm){
    if (form.valid){
      this.bill.ID_USER=this.currentUser.idUser;
      console.log(this.bill);
      this.addBillService.sendBill(this.bill).subscribe(
        response => {
          console.log(response);
          alert("Addet successfully !");
        },
        error => {
          console.log(error);
          alert("This bill can not be added  ");
        }
      )
    }
    else{
      alert ("Please fill in all the details");
    }
  }
}
