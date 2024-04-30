import { Component , OnInit } from '@angular/core';
import { Bill } from '../Bill';
import { ViewBillService } from './view-bill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrl: './view-bill.component.css'
})
export class ViewBillComponent implements OnInit{
  bills: Bill[]=[];
  constructor(
    private viewBillService: ViewBillService,
    private router: Router
  ){}
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

        this.viewBillService.getBills(this.currentUser.idSpace).subscribe(
          (response: Bill[]) => {
            console.log(response);
            this.bills = response;
         },
         (error : any)=>{
           console.log(error);
         }
        );
  }

  NavigateToEditBill(bill:Bill):void{
    this.router.navigate(['/edit-bill',bill.ID_BILL]);
    console.log("navigated to edit bill");
  }

  NavigateToDeleteBill(bill:Bill):void{
    this.router.navigate(['/delete-bill',bill.ID_BILL]);
    console.log("navigated to delete bill");
  }
}
