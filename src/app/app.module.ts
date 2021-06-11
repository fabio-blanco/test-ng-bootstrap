import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbDatepickerModule, NgbTimepickerModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      NgbDatepickerModule,
      NgbTimepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
