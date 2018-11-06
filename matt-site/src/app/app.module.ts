import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DrinkModule } from './drink/drink.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

@NgModule({
  
  imports: [
    BrowserModule,
    DrinkModule,
    HttpClientModule,
    MaterialModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
