import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import  { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DemoUtilsModule } from '../utils/module';


@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent
  ],
  imports: [
  	CommonModule,
  	FormsModule,
  	NgbModalModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  exports:[CalendarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
