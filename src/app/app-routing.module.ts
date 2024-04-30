import { Component , NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddMaintainComponent } from './add-maintain/add-maintain.component';
import { ViewMaintainComponent } from './view-maintain/view-maintain.component';
import { EditMaintainComponent } from './edit-maintain/edit-maintain.component';
import { DeleteMaintainComponent } from './delete-maintain/delete-maintain.component';
import { ViewMembersComponent } from './view-members/view-members.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { DeleteBillComponent } from './delete-bill/delete-bill.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { ProductsComponent } from './products/products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ToPayComponent } from './to-pay/to-pay.component';


const routes: Routes = [
  
  { path:'home', component : HomeComponent},
  { path:'add-member', component : AddMemberComponent},
  { path : 'view-members' , component : ViewMembersComponent},
  //other member services 
  { path:'add-maintain', component : AddMaintainComponent},
  { path:'view-maintain', component : ViewMaintainComponent},
  { path:'edit-maintain/:maintain_id', component: EditMaintainComponent },
  { path:'delete-maintain/:maintain_id', component: DeleteMaintainComponent },
  { path:'add-bill' , component: AddBillComponent},
  { path:'view-bill' , component:ViewBillComponent},
  { path:'delete-bill/:bill_id', component: DeleteBillComponent},
  { path:'edit-bill/:bill_id' , component : EditBillComponent},
  { path:'products' , component: ProductsComponent},
  { path:'add-product' , component:AddProductComponent},
  { path:'edit-product/:id' , component: EditProductComponent},
  { path:'sign-up' , component: SignUpComponent},
  { path :'' , component : LogInComponent},
  { path:'to-pay', component: ToPayComponent}

];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
