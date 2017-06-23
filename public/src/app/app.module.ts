import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from "@angular/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from "app/app-routing.module";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpService } from "app/http.service";
import {CookieService} from 'angular2-cookie/services/cookies.service';
import { CreatesurveyComponent } from './createsurvey/createsurvey.component';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreatesurveyComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [HttpService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
