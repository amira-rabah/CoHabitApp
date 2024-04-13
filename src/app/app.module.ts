import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddMemberComponent } from './add-member/add-member.component';
import { AddMaintainComponent } from './add-maintain/add-maintain.component';
import { ViewMaintainComponent } from './view-maintain/view-maintain.component';
import { EditMaintainComponent } from './edit-maintain/edit-maintain.component';
import { DeleteMaintainComponent } from './delete-maintain/delete-maintain.component';
import { ROUTES, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: './edit-maintain/:maintain', component: EditMaintainComponent },
  { path: './delete-maintain/:maintain', component: DeleteMaintainComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    AddMemberComponent,
    AddMaintainComponent,
    ViewMaintainComponent,
    EditMaintainComponent,
    DeleteMaintainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
