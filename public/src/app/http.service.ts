import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { CookieService } from "angular2-cookie/services/cookies.service";
import { Http } from "@angular/http";
import 'rxjs'

@Injectable()
export class HttpService {
  observedUser = new BehaviorSubject(null)
  observedSurveys = new BehaviorSubject(null)
  observedCurrentSurvey = new BehaviorSubject(null)

  constructor(private _cookie:CookieService, private _router:Router, private _http: Http) { }

  updateUser(user) {
    this.observedUser.next(user)
  }

  updateSurveys(surveys) {
    this.observedSurveys.next(surveys)
  }

  updateCurrentSurvey(survey) {
    this.observedCurrentSurvey.next(survey)
  }

  checkForUser() {
    if(!this._cookie.getObject("user")) {
      this._router.navigate(['/'])
    }
  }

  logout() {
    this._cookie.remove("user")
    this.updateUser(null)
    this._router.navigate(["/"])
  }

  findUser(name){
    console.log("checking for user",name)
    return this._http.post(`/getoneuser`,{name: name})
    .map( (data) => {if(!data.json()) {
      this.createUser(name)
    }
    else {
      this._cookie.putObject("user",data.json())
      this.updateUser(data.json())
      this._router.navigate(['/dashboard'])
    }})
    .toPromise();
  }

  createUser(name) {
    return this._http.post(`createuser`,{name:name})
    .map( (data)=> {this._cookie.putObject("user",data.json())
    this.updateUser(data.json())
    this._router.navigate(['/dashboard'])})
    .toPromise()
  }

  submitSurvey(survey) {
    return this._http.post(`createsurvey`,survey)
    .map((survey) => {console.log("new survey",survey.json())})
    .toPromise()
  }

  getAllSurveys() {
    return this._http.get(`getallsurveys`)
    .map((surveys) => {this.updateSurveys(surveys.json())})
    .toPromise()
  }

  getOneSurvey(id) {
    return this._http.get(`getonesurvey/${id}`)
    .map((survey)=>{this.updateCurrentSurvey(survey.json())})
    .toPromise()
  }

  surveyVote(num,survey) {
    return this._http.post(`surveyvote`,{option: num,survey_id:survey})
    .map((survey) =>{this.updateCurrentSurvey(survey.json())})
    .toPromise()
  }

  deletesurvey(survey_id) {
    console.log("at service")
    return this._http.post(`deletesurvey`,{_id:survey_id})
    .map((user)=>{
      this.getAllSurveys()
      .then((surveys)=>console.log(surveys))
      .catch((err)=>console.log(err))
    })
    .toPromise()
  }

}
