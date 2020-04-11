import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { RouterModule } from '@angular/router';
import { routes } from './admin/admin.routing.module';

var config = {
  
  apiKey: "AIzaSyBNnc1Zwq33G9AS5D3sExY1FigILbrnbDw",
    authDomain: "angular-chatapp-92cc0.firebaseapp.com",
    databaseURL: "https://angular-chatapp-92cc0.firebaseio.com",
    projectId: "angular-chatapp-92cc0",
    storageBucket: "angular-chatapp-92cc0.appspot.com",
    messagingSenderId: "423618110154",
    appId: "1:423618110154:web:4c7ef865247e19ed908a33",
    measurementId: "G-KDFN9RW6Y3"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
