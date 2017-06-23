import { Component, OnInit } from '@angular/core';
import { HttpService } from "app/http.service";
import { CookieService } from "angular2-cookie/services/cookies.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey: any;

  constructor(private _http: HttpService, private _cookie:CookieService, private _route:ActivatedRoute) {
    _http.checkForUser()
    // this block is not working for some reason... survey always comes out as undefined... This is why I'm using an observable
    _route.params.subscribe((param)=> {
      _http.getOneSurvey(param.id)
      .then((survey)=>_http.observedCurrentSurvey.subscribe(
    (survey)=>{this.survey=survey; console.log("this.survey",this.survey)},
    (err)=>console.log(err)
    ))
      .catch(err=>console.log(err))
  })
    
   }

  ngOnInit() {
  }

  logout() {
   this._http.logout()
  }

  vote(num) {
    this._http.surveyVote(num,this.survey._id)
  }


}
