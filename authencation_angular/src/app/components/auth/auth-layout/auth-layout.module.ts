import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// Component
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { AuthLayoutComponent } from './auth-layout.component'
// Router
import { AuthRouterModule } from './auth.router';

@NgModule({
    imports: [
        CommonModule,
        AuthRouterModule,
        FormsModule
    ],
    declarations: [
        LoginComponent,
        RegisterComponent,
        ProfileComponent,
        AuthLayoutComponent
    ]
    
})

export class AuthModule {
    constructor() { }
}