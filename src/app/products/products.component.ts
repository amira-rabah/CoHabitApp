import { Component,OnInit } from '@angular/core';
import {ProductsService} from './products.service';
import {Products} from '../Product';
import { Router } from '@angular/router';





@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent implements OnInit {
  productList: Products[] = [];

  //private modalService: NgbModal
  constructor(private productsService: ProductsService ) { }

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

    this.productsService.getProducts(this.currentUser.idSpace).subscribe(
      (data) => {
        this.productList = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  deleteProduct(product: any): void {
    const confirmDelete = confirm('Are you sure you want to delete this product?');
    if (confirmDelete) {
      this.productsService.deleteProduct(product.ID_PRODUCT).subscribe(
        () => {
          alert("product deleted successfully");
          this.productList = this.productList.filter(p => p.ID_PRODUCT !== product.ID_PRODUCT);
        },
        error => {
          console.error('Error deleting product:', error);
          alert ("can't delete this product");
        }
      );
    }
  }


 

}
