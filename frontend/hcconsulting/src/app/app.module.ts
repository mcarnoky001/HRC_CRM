import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import  { CalendarComponent } from './calendar/calendar.component';
import { DemoUtilsModule } from '../utils/module';
import { CalendarControllerComponent } from './calendar-controller/calendar-controller.component';

const appRoutes: Routes = [
  { path: '', component: ClientsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'calendar', component: CalendarComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    AboutComponent,
    CalendarComponent,
    CalendarControllerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    CommonModule,
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
