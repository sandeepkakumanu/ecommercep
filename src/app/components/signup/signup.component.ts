import { Component, OnInit } from '@angular/core';
import{ AuthenticationService} from 'src/app/services/authentication.service'
import {UserService} from 'src/app/services/user.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
   errorMsg : string ='';
   sucessMsg:string ='';
   err :any
  constructor(private as : AuthenticationService , private user : UserService, private router: Router) { }

  ngOnInit(): void {
  }
     datacapture(form){
      

       this.as
       .signUp(form.value.semail,form.value.spassword)
       .then((data) => {

      this.sucessMsg ="SuccessFully  you are signin";
       this.user.addNewUser(data.user.uid,form.value.semail,form.value.spassword);
      this.router.navigate(['/']);
       })
         
        .catch ((err)  => (this.errorMsg =this.err));
      }
    }
         
       

