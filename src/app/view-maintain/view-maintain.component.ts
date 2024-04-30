import { Component , OnInit } from '@angular/core';
import { Maintain } from '../Maintain';
import { ViewMaintainService } from './view-maintain.service';
import { Router } from '@angular/router';
import { EditMaintainComponent } from '../edit-maintain/edit-maintain.component';

@Component({
  selector: 'app-view-maintain',
  templateUrl: './view-maintain.component.html',
  styleUrl: './view-maintain.component.css'
})
export class ViewMaintainComponent implements OnInit{

  maintains: Maintain[] | undefined;
  
  constructor(
    private viewMaintainService : ViewMaintainService, 
    private router:Router
  ) {}

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
  
    this.viewMaintainService.getMaintains(this.currentUser.idSpace).subscribe(
      
      (data :any )=>{
        this.maintains=data;
        console.log(data);
        
      },
      (error : any)=>{
        console.log(error);
      }
    )
  }

  NavigateToEditMaintain(maintain : Maintain) :void{ 
    // Navigate to the edit interface with a maintain as a parameter
    this.router.navigate(['/edit-maintain',maintain.ID_MAINTAIN.toString()]);
    console.log("navigated to edit maintain");
  }

  NavigateToDeleteMaintain(maintain : Maintain):void{
    // Navigate to the delete interface with a maintain as a parameter
    this.router.navigate(['/delete-maintain', maintain.ID_MAINTAIN]);
    console.log("navigated to delete maintain with ID:", maintain.ID_MAINTAIN);
   }

}
