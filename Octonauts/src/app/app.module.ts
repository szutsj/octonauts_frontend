import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { RegisterFormComponent } from './_components/register-form/register-form.component';
import { LoginComponent } from './_components/login/login.component';
import { LoginFormComponent } from './_components/login-form/login-form.component';
import { HeaderComponent } from './_components/header/header.component';
import { PageNotFoundComponent } from './_components/page-not-found/page-not-found.component';
import { ServerErrorInterceptor } from './interceptors/server-error-interceptor';
import { GenericErrorComponent } from './_components/generic-error/generic-error.component';
import {OctopodComponent} from "./_components/octopod/octopod.component";

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
    OctopodComponent
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
