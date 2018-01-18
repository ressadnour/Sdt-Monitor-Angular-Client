import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthGuardService } from "./auth/auth-guard.service";



const appRoutes: Routes = [
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule'
        //, canActivate: [AuthGuardService]
    },
    { path: 'login', loadChildren: './auth/login/login.module#LoginModule' },
    { path: 'signup', loadChildren: './auth/signup/signup.module#SignupModule' },
    { path: 'not-found', loadChildren: './not-found/not-found.module#NotFoundModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})

export class AppRoutingModule {
}
