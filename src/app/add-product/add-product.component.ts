import { Component , OnInit } from '@angular/core';
import { Products } from '../Product';
import {AddProductService} from './add-product.service';
import { NgForm } from '@angular/forms';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent implements OnInit{

  product : Products|any = {
    PRODUCT_NAME :'',
    PRICE : 0.0,
    PERSONAL_USE: false,
    ID_TYPE :0,
    qte : 0.0,
    ID_USER : 0
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

  constructor (public addProductS : AddProductService) {}
  
  AddProduct(form : NgForm) : void{
    if (form.valid){
      this.product.ID_USER=this.currentUser.idUser;
      console.log(this.product);
      this.addProductS.postProduct(this.product).subscribe(
        response => {
          console.log(response);
          alert("Added successfully !");
        },
        error => {
          console.log(error);
          alert("This product can not be added  ");
        }
      )
    }
    else{
      alert ("Please fill in all the details");
    }


}
}
