import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {provideClientHydration} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewtecComponent } from './newtec/newtec.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewtecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
