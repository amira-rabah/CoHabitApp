import { Component ,OnInit} from '@angular/core';
import { DeleteMaintainService } from './delete-maintain.service';
import { Router, ActivatedRoute } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-delete-maintain',
  templateUrl: './delete-maintain.component.html',
  styleUrl: './delete-maintain.component.css'
})
export class DeleteMaintainComponent implements OnInit {
  constructor(
    private deleteMaintainService: DeleteMaintainService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  maintain_id:number=0;
  param : any;
  deleting_result : boolean|undefined;

  ngOnInit() {
    this.param = this.activatedRoute.params.subscribe(
      params => (this.maintain_id = parseInt(params['maintain_id'], 10))
    );
  }

  deleteMaintain(maintain_id: number){
    //this.maintain_id = parseInt(this.activatedRoute.snapshot.params['maintain_id'], 10);
    this.deleteMaintainService.deleteMaintain(maintain_id).subscribe(
      response=>{
        console.log(response);
        this.deleting_result=true;
        

      },
      error=>{
        console.log(error);
        this.deleting_result=false;
      }
    )
  }
}
