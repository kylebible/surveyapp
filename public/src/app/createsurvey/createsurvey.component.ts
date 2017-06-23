import { Component, OnInit } from '@angular/core';
import { CookieService } from "angular2-cookie/services/cookies.service";
import { HttpService } from "app/http.service";
import { Survey } from "app/survey";
import { Router } from "@angular/router";

@Component({
  selector: 'app-createsurvey',
  templateUrl: './createsurvey.component.html',
  styleUrls: ['./createsurvey.component.css']
})
export class CreatesurveyComponent implements OnInit {
  survey = new Survey()

  constructor(private _http: HttpService, private _cookie:CookieService, private _route: Router) {
    _http.checkForUser()
   }

  ngOnInit() {
  }
  
  submitSurvey() {
    this.survey._user = this._cookie.getObject("user")["_id"]
    console.log("survey",this.survey)
    this._http.submitSurvey(this.survey)
    .then((newSurvey)=> this._route.navigate(['/dashboard']))
    .catch(err=>console.log("error submitting survey",err))
  }
  
  logout() {
   this._http.logout()
  }
}
