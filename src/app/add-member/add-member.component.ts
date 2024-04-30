import { NgModule } from '@angular/core';
import { Component , OnInit } from '@angular/core';
import { Member } from '../Member';
import { AddMemberService } from './add-member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit{
  member : Member| undefined ;
  adding_result : boolean | undefined;
  

  constructor(private memberService: AddMemberService) { }

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
    
  
  search(username : string): void {
    
    
    this.memberService.getMember(username,this.currentUser.idSpace).subscribe(
      (data: any) => {
        this.member = data.member_to_use;
        this.adding_result = data.result;
        console.log(data);
        console.log(this.adding_result);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
