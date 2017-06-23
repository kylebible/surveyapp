import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from "app/app.component";
import { LoginComponent } from "app/login/login.component";
import { DashboardComponent } from "app/dashboard/dashboard.component";
import { CreatesurveyComponent } from "app/createsurvey/createsurvey.component";
import { SurveyComponent } from "app/survey/survey.component";

const routes: Routes = [
  {path: '', children: [], component: LoginComponent},
  {path: 'dashboard', children: [], component: DashboardComponent},
  {path: 'create', children: [], component: CreatesurveyComponent},
  {path: 'survey/:id', children: [], component: SurveyComponent},
  {path: '**', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }