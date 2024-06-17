import { Component } from '@angular/core';
import { NgForm , NgModel } from '@angular/forms';
import { SignUpService } from './sign-up.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  
  Info :any={
    FIRST_NAME: '',
    LAST_NAME :'',
    USERNAME :'',
    EMAIL : '',
    PHONE :0,
    GENDER : '',
    DATE_OF_BIRTH: "",
    MANAGER : false,
    PWD :'',
    CONFIRM_PWD:''
  };
  

  constructor(private signupService : SignUpService) { }

  addNewUser(form : NgForm) : void{
    
    if (form.valid){
      
      /* let formattedDate = new Intl.DateTimeFormat('en-CA', { 
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(this.Info.DATE_OF_BIRTH); */
    //this.Info.DATE_OF_BIRTH=this.Info.DATE_OF_BIRTH.toISOString()
    
      this.signupService.sendNewUser(this.Info).subscribe({
        
        next :(data) => {
          console.log(data);
          alert(data);
        },
        error:(error) => {
          console.log(error);
          alert("This user can not be added  ");
        }}
      )
    }
    else{
      alert ("Please fill in all the details");
    }
  }
   
}
