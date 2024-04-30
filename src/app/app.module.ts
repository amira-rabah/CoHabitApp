import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient,withInterceptors } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddMaintainComponent } from './add-maintain/add-maintain.component';
import { ViewMaintainComponent } from './view-maintain/view-maintain.component';
import { EditMaintainComponent } from './edit-maintain/edit-maintain.component';
import { DeleteMaintainComponent } from './delete-maintain/delete-maintain.component';
import { ROUTES, RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ViewMembersComponent } from './view-members/view-members.component';
import { AddBillComponent } from './add-bill/add-bill.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { EditBillComponent } from './edit-bill/edit-bill.component';
import { DeleteBillComponent } from './delete-bill/delete-bill.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductsComponent } from './products/products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ToPayComponent } from './to-pay/to-pay.component';
import { userInterceptor } from './user.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    AddMaintainComponent,
    ViewMaintainComponent,
    EditMaintainComponent,
    DeleteMaintainComponent,
    NavbarComponent,
    HomeComponent,
    ViewMembersComponent,
    AddBillComponent,
    ViewBillComponent,
    EditBillComponent,
    DeleteBillComponent,
    SignUpComponent,
    LogInComponent,
    EditProductComponent,
    ProductsComponent,
    ProductsComponent,
    AddProductComponent,
    ToPayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([userInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
