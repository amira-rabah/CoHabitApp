import { Component, OnInit } from '@angular/core';
import { DeleteBillService } from './delete-bill.service';
import {Router , ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-bill',
  templateUrl: './delete-bill.component.html',
  styleUrl: './delete-bill.component.css'
})
export class DeleteBillComponent implements OnInit {

  constructor(
    private deleteBillService: DeleteBillService,
    private router: Router,
    private activatedRoute: ActivatedRoute){}

  bill_id:number=0;
  param : any;
  deleting_result : boolean|undefined;


  ngOnInit(): void {
    this.param = this.activatedRoute.params.subscribe(
      params => (this.bill_id = parseInt(params['bill_id'], 10))
    );
  }

  deleteBill(bill_id : number){
    this.deleteBillService.deleteBill(bill_id).subscribe(
      response => {
        this.deleting_result = response;
        console.log(this.deleting_result);
      },
      error=>{
        console.log(error);
        this.deleting_result=false;
      }
    ); 
  }

}
