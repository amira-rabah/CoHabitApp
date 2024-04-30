import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Maintain } from '../Maintain';
import { AddMaintainService } from './add-maintain.service';
import { response } from 'express';

@Component({
  selector: 'app-add-maintain',
  templateUrl: './add-maintain.component.html',
  styleUrl: './add-maintain.component.css'
})
export class AddMaintainComponent implements OnInit{

  maintain: Maintain = {
    ID_MAINTAIN: 0,
    MAINTAIN_NAME: '',
    COST: 0,
    DESCRIPTION: '',
    FINISHED: false ,
    MAINTAIN_DATE: new Date,
    ID_USER:0
  };
  
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
  }

  constructor (public addmaintain : AddMaintainService) {}
  
  AddMaintain(form : NgForm) : void{
    if (form.valid){
      this.maintain.ID_USER=this.currentUser.idUser
      console.log(this.maintain);
      this.addmaintain.sendMaintain(this.maintain).subscribe(
        response => {
          console.log(response);
          alert("Addet successfully !");
        },
        error => {
          console.log(error);
          alert("This maintain can not be added  ");
        }
      )
    }
    else{
      alert ("Please fill in all the details");
    }
  }
}
