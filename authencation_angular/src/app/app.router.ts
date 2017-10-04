import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

export const routes: Routes = [
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    { path: 'auth', loadChildren: './components/auth/auth-layout/auth-layout.module#AuthModule' }
]

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

