import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './_auth/auth.service';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RegisterFormComponent } from './_components/_loginAndStuff/register-form/register-form.component';
import { LoginComponent } from './_components/_loginAndStuff/login/login.component';
import { LoginFormComponent } from './_components/_loginAndStuff/login-form/login-form.component';
import { HeaderComponent } from './_components/header/header.component';
import { PageNotFoundComponent } from './_components/_loginAndStuff/page-not-found/page-not-found.component';
import { ServerErrorInterceptor } from './_interceptors/server-error-interceptor';
import { GenericErrorComponent } from './_components/_loginAndStuff/generic-error/generic-error.component';
import {OctopodComponent} from './_components/octopod/octopod.component';
import { CrewActivationComponent } from './_components/_crew/crew-activation/crew-activation.component';
import { GupActivationComponent } from './_components/_gups/gup-activation/gup-activation.component';
import { MedicineStockComponent } from './_components/_medicines/medicine-stock/medicine-stock.component';
import { BuyNewMedicineComponent } from './_components/_medicines/buy-new-medicine/buy-new-medicine.component';
import { PatientsWaitingComponent } from './_components/_animals/patients-waiting/patients-waiting.component';
import { PatientsUnderTreatmentComponent } from './_components/_animals/patients-under-treatment/patients-under-treatment.component';
import { SicknessComponent } from './_components/_animals/sickness/sickness.component';
import {AnimalComponent} from "./_components/_animals/animal/animal.component";
import { AnimalsComponent } from './_components/_animals/animals/animals.component';
import { StartPageComponent } from './_components/start-page/start-page.component';
import { HospitalComponent } from './_components/_animals/hospital/hospital.component';
import { IconForActiveComponent } from './_components/_animals/icons-and-buttons/icon-for-images/icon-for-active.component';
import { ButtonForActivateComponent } from './_components/_animals/icons-and-buttons/button-for-activate/button-for-activate.component';
import { SymbolComponent } from './_components/_animals/icons-and-buttons/symbol/symbol.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    LoginComponent,
    LoginFormComponent,
    RegisterFormComponent,
    HeaderComponent,
    PageNotFoundComponent,
    GenericErrorComponent,
    OctopodComponent,
    CrewActivationComponent,
    GupActivationComponent,
    MedicineStockComponent,
    BuyNewMedicineComponent,
    PatientsWaitingComponent,
    PatientsUnderTreatmentComponent,
    SicknessComponent,
    AnimalsComponent,
    AnimalComponent,
    StartPageComponent,
    HospitalComponent,
    IconForActiveComponent,
    ButtonForActivateComponent,
    SymbolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatDialogModule,
    ShowHidePasswordModule,
  ],
  bootstrap: [AppComponent],
  entryComponents: [RegisterFormComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    }
  ]
})

export class AppModule { }
