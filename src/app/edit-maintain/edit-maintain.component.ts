import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Maintain } from '../Maintain';
import { EditMaintainService } from './edit-maintain.service';
import { FormGroup , FormControl } from '@angular/forms';


@Component({
  selector: 'app-edit-maintain',
  templateUrl: './edit-maintain.component.html',
  styleUrl: './edit-maintain.component.css'
})
export class EditMaintainComponent implements OnInit{

  updateForm= new FormGroup({
    ID_MAINTAIN : new FormControl(''),
    MAINTAIN_NAME:new FormControl(''),
    DESCRIPTION:new FormControl(''),
    COST:new FormControl(''),
    FINISHED:new FormControl('')
    
  } );
  maintain_id:number| any;
  maintain :Maintain| any;
  param: any;

  constructor(
    private route :Router,
    private activatedRoute:ActivatedRoute,
    private maintainInfo : EditMaintainService

  ){}
  
  ngOnInit(): void {
    
    this.param = this.activatedRoute.params.subscribe(
      params => (this.maintain_id = parseInt(params['maintain_id'], 10))
    );
    
      console.log(this.maintain_id);
      this.maintainInfo.getMaintainInfo(this.maintain_id).subscribe(
        response =>{
          this.updateForm.setValue({
            ID_MAINTAIN:response.ID_MAINTAIN,
            MAINTAIN_NAME:response.MAINTAIN_NAME,
            DESCRIPTION:response.DESCRIPTION,
            COST:response.COST,
            FINISHED:response.FINISHED
          });
        }
      ) 
  }

  UpdateMaintain(){
    this.maintain=this.updateForm.value;
    this.maintainInfo.updateMaintain(this.maintain).subscribe(
        
      response => {
        console.log(this.updateForm.value);
        console.log(response);
        if(response.status == 201){
          alert("Maintain updated successfully");
          this.route.navigate(['/view-maintain']);
        }
      },
      error => {
        console.log(this.updateForm.value);
        console.log(error);
        alert("Error while updating maintain");
      }
    )
    
  }

  
}
