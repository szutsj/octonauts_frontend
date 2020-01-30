import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_components/login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { GenericErrorComponent } from './_components/generic-error/generic-error.component';
import {OctopodComponent} from "./_components/octopod/octopod.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'octopod', component: OctopodComponent, canActivate: [AuthGuard] },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full'},
  { path: 'error', component: GenericErrorComponent},
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
