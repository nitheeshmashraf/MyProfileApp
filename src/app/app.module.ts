import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashComponent } from './dash/dash.component';

import {  UserService } from './user.service';

import { AuthGuard } from './auth.guard';

const approutes:Routes=[
  {
    path: 'dash',
    canActivate:[ AuthGuard ],
    component:DashComponent
  },
  {
    path: '',
    component:LoginFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(approutes)
  ],
  providers: [
    UserService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
