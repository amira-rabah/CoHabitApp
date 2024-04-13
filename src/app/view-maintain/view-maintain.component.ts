import { Component , OnInit } from '@angular/core';
import { Maintain } from '../Maintain';
import { ViewMaintainService } from './view-maintain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-maintain',
  templateUrl: './view-maintain.component.html',
  styleUrl: './view-maintain.component.css'
})
export class ViewMaintainComponent implements OnInit{

  maintains: Maintain[] | undefined;
  
  constructor(private viewMaintainService : ViewMaintainService, private router:Router) {}
  ngOnInit(): void{
    this.viewMaintainService.getMaintains().subscribe(
      (data :any )=>{
        this.maintains=data;
        console.log(data);
        
      },
      (error : any)=>{
        console.log(error);
      }
    )
  }

  EditMaintain(maintain : Maintain) :void{ 
    // Navigate to the edit interface with a maintain as a parameter
    this.router.navigate(['/edit-maintain', {state : {maintain : maintain}}]);
  }

  DeleteMaintain(maintain : Maintain):void{
    // Navigate to the delete interface with a maintain as a parameter
    this.router.navigate(['/delete-maintain', {state : {maintain : maintain}}]);
   }

}
