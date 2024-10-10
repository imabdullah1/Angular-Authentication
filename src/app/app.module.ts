import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AuthComponent } from './auth/auth.component';
import { ButtonModule } from 'primeng/button';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth-intercepter.sevice';
import { LoggingInterceptorService } from './logging-interceptor.service';
import {  HttpClientModule } from "@angular/common/http";
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';





@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    PanelModule ,
    ButtonModule
    
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    },
    {
      provide  : HTTP_INTERCEPTORS,
      useClass:  LoggingInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
