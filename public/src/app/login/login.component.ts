import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { HttpService } from "app/http.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = this._cookie.getObject("user")
  name = ""

  constructor(private _cookie:CookieService, private _router:Router, private _http:HttpService) {
    if(_cookie.getObject("user")) {
        _router.navigate(['/dashboard'])
   }
  }

  ngOnInit() {
  }

  login() {
    this._http.findUser(this.name)
  }

}
