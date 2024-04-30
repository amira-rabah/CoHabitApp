import { Component , OnInit } from '@angular/core';
import { EditBillService } from './edit-bill.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { Bill } from '../Bill';
import { FormControl, FormGroup } from '@angular/forms';
import { BillTypesServiceService } from '../billTypesService/bill-types-service.service';
import { TypeOfBill } from '../TypeOfBill';

@Component({
  selector: 'app-edit-bill',
  templateUrl: './edit-bill.component.html',
  styleUrl: './edit-bill.component.css'
})
export class EditBillComponent implements OnInit{
  
  bill: Bill|any;
  updateForm=new FormGroup({
    BILL_NUM : new FormControl(''),
    DESCRIPTION : new FormControl(''),
    AMOUNT : new FormControl(''),
    DEADLINE : new FormControl(''),
    PAYED : new FormControl(''),
    ID_TYPE : new FormControl(''),
    BILL_TYPE_NAME: new FormControl('')
  });

  bill_id : number|any;
  billTypes : TypeOfBill[]=[];
  param : any;

  constructor(
    private editBillService: EditBillService,
    private activatedRoute: ActivatedRoute,
    private billTypesService : BillTypesServiceService,
    private route :Router

  ){}

  ngOnInit(): void {

    this.billTypesService.getBillTypes().subscribe(
      response=> {
        this.billTypes = response;
        console.log(this.billTypes);
      }
    )

      this.param = this.activatedRoute.params.subscribe(
        params => (this.bill_id = parseInt(params['bill_id'],10))
      );

      console.log(this.bill_id);

      this.editBillService.getBillInfo(this.bill_id).subscribe(
        response => {
          this.updateForm.setValue({
            BILL_NUM : response.BILL_NUM,
            DESCRIPTION : response.DESCRIPTION,
            AMOUNT : response.AMOUNT,
            DEADLINE : response.DEADLINE,
            PAYED : response.PAYED,
            ID_TYPE : response.ID_TYPE,
            BILL_TYPE_NAME: response.BILL_TYPE_NAME})
            console.log(response);
            
        }
      )
    }
        
  
      
  

  UpdateBill(){
    this.bill=this.updateForm.value;
    this.editBillService.updateBill(this.bill).subscribe(
      response => {
        console.log(response);
        if(response.status == 201){
          alert("Bill updated successfully");
          this.route.navigate(['/view-bill'])
        }
      },
      error => {
        console.log(error);
        alert("Error while updating bill");
      }
    )
  }

}
