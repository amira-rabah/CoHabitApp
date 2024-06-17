import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Products } from '../Product';
import { EditProductServiceService } from './edit-product-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  productId: number | undefined;
  product: Products | any;

  constructor(private route: ActivatedRoute, private editProductService: EditProductServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = +params['id']; 
      console.log (this.productId);
      
      this.editProductService.getProductById(this.productId).subscribe(
        (data ) => {
          this.product = data;
          console.log(this.product[0]);
        },
        (error) => {
          console.error(error);
        }
      );
    });
  }

  updateProduct() {
    console.log(this.product);
    this.editProductService.updateProduct(this.product[0]).subscribe(
      (response) => {
        alert("Product updated successfully")
        console.log("Product updated successfully", response);
      },
      (error) => {
        console.error("Error updating product", error);
      }
    );
  }

  

  
}
