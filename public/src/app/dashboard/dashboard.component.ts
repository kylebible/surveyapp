import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { CookieService } from "angular2-cookie/services/cookies.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  surveys = []
  user = this._cookie.getObject("user")

  constructor(private _http: HttpService, private _cookie:CookieService) {
    _http.checkForUser()
    _http.getAllSurveys()
    .then((surveys)=>{
    _http.observedSurveys.subscribe(
      (surveys)=>this.surveys=surveys,
      (err)=>console.log(err)
    ); console.log(this.surveys)})
    
  }

  ngOnInit() {
  }

  logout() {
   this._http.logout()
  }

  deleteSurvey(survey_id) {
    console.log("button clicked")
    this._http.deletesurvey(survey_id)
  }

}
