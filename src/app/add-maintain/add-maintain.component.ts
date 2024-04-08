import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Maintain } from '../Maintain';

@Component({
  selector: 'app-add-maintain',
  templateUrl: './add-maintain.component.html',
  styleUrl: './add-maintain.component.css'
})
export class AddMaintainComponent {

  maintain: Maintain= {
    ID_MAINTAIN :0,
    MAINTAIN_NAME :'',
    DESCRIPTION :'',
    FINISHED : false,
    COST : 0,
    MAINTAIN_DATE : new Date() ,
    ID_USER : 0};
  
  constructor(private http:HttpClient){}
  
  AddMaintain(){}
}
