import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// Component
import { AuthLayoutComponent } from './auth-layout.component'
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';

export const AuthRouter: Routes = [
    {
        path: '', component: AuthLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'profile/:id', component: ProfileComponent }
        ]
    },

]

export const AuthRouterModule: ModuleWithProviders = RouterModule.forChild(AuthRouter);

