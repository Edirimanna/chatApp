import { LoginFormComponent } from './app/login-form/login-form.component';
import { SignupFormComponent } from './app/signup-form/signup-form.component';
import { ChatroomComponent } from './app/chatroom/chatroom.component';
import { Routes } from '@angular/router'

export const appRouters : Routes = [

    { path: 'login' , component: LoginFormComponent },
    { path : 'signup' , component: SignupFormComponent },
    { path: 'chat' , component: ChatroomComponent },
    { path: '' , redirectTo: '/login' ,pathMatch: 'full' }
    
];