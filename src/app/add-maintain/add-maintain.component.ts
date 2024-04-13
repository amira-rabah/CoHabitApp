import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Maintain } from '../Maintain';
import { AddMaintainService } from './add-maintain.service';
import { response } from 'express';

@Component({
  selector: 'app-add-maintain',
  templateUrl: './add-maintain.component.html',
  styleUrl: './add-maintain.component.css'
})
export class AddMaintainComponent {

  maintain: Maintain |any = {
    MAINTAIN_NAME: '',
    COST: '',
    DESCRIPTION: '',
    FINISHED: false 
  };
  

  constructor (public addmaintain : AddMaintainService) {}
  AddMaintain(form : NgForm) : void{
    if (form.valid){
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
