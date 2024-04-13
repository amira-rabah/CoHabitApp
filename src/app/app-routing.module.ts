import { Component , NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditMaintainComponent } from './edit-maintain/edit-maintain.component';
import { DeleteMaintainComponent } from './delete-maintain/delete-maintain.component';
import { CommonModule } from '@angular/common';


const routes: Routes = [
  { path: './edit-maintain/:maintain', component: EditMaintainComponent, data : {maintain: {}} },
  { path: './delete-maintain/:maintain', component: DeleteMaintainComponent }
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes),AppRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
