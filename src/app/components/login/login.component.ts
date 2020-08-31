import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private as: AuthenticationService, private router : Router) { }

  ngOnInit(): void {
  }
  login(form){
    this.as.login(form.value.semail,form.value.spassword)
    .then((data) => this.router.navigate(['/']));
  
  // .catch((err) => console.log(err));
  }

}
