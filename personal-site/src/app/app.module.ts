import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './aboutme.component';
import { InterestsComponent } from './interests.component';

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [
    AppComponent,
    AboutMeComponent,
    InterestsComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
