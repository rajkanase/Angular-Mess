import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  tog="container log-in";

  onLgn(){
    this.tog="container";
  }

  signUp(){
    this.tog="container log-in";
  }

  Log(){
    this.tog="container active";
  }

  Sign(){
    this.tog="container active";
  }



  constructor() { }

  ngOnInit() {
  }

}
