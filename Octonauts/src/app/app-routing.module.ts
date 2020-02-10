import { PageNotFoundComponent } from './_components/_loginAndStuff/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './_components/_loginAndStuff/login/login.component';
import { AuthGuard } from './_auth/auth.guard';
import { GenericErrorComponent } from './_components/_loginAndStuff/generic-error/generic-error.component';
import {OctopodComponent} from "./_components/octopod/octopod.component";
import {GupActivationComponent} from "./_components/_gups/gup-activation/gup-activation.component";
import {AnimalComponent} from "./_components/_animals/animal/animal.component";
import {AnimalsComponent} from "./_components/_animals/animals/animals.component";
import {BuyNewMedicineComponent} from "./_components/_medicines/buy-new-medicine/buy-new-medicine.component";
import {CrewActivationComponent} from "./_components/_crew/crew-activation/crew-activation.component";
import {StartPageComponent} from "./_components/start-page/start-page.component";
import {PatientsUnderTreatmentComponent} from "./_components/_animals/patients-under-treatment/patients-under-treatment.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'octopod', component: OctopodComponent, canActivate: [AuthGuard] },
  {path: 'startPage', component: StartPageComponent, canActivate: [AuthGuard] },
  {path: 'crew', component: CrewActivationComponent, canActivate: [AuthGuard] },
  {path: 'animals', component: AnimalsComponent, canActivate: [AuthGuard] },
  {path: 'gups', component: GupActivationComponent, canActivate: [AuthGuard] },
  {path: 'pharmacy', component: BuyNewMedicineComponent, canActivate: [AuthGuard] },
  {path: 'hospital', component: PatientsUnderTreatmentComponent, canActivate: [AuthGuard] },
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
