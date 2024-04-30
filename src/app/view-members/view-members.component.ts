import { Component, OnInit } from '@angular/core';
import { ViewMembersService } from './view-members.service';
import { Member } from '../Member';

@Component({
  selector: 'app-view-members',
  templateUrl: './view-members.component.html',
  styleUrl: './view-members.component.css'
})
export class ViewMembersComponent implements OnInit{
  users: Member[] = [];

  constructor(private membersService: ViewMembersService) { }

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

    this.membersService.getUsers(this.currentUser.idSpace).subscribe(
      (data) => {
        this.users = data;
        console.log(data);
      },
      (error) => {
        console.error(error);
      }
    );
}
}