import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { AboutComponent } from './about/about.component';
import { CalendarModule } from 'angular-calendar';
import { NgbModalModule,NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import  { CalendarComponent } from './calendar/calendar.component';
import { DemoUtilsModule } from '../utils/module';
import { CalendarControllerComponent } from './calendar-controller/calendar-controller.component';
import { CalendarEventDetailComponent } from './calendar-event-detail/calendar-event-detail.component';
import { ScrollToModule } from 'ng2-scroll-to-el';
import {MatSidenavModule} from '@angular/material/sidenav';

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
    CalendarControllerComponent,
    CalendarEventDetailComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    CommonModule,
    NgbModalModule.forRoot(),
    ScrollToModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CalendarModule.forRoot(),
    DemoUtilsModule,
    MatSidenavModule,
  ],
  entryComponents: [CalendarEventDetailComponent],
  exports:[CalendarComponent],
  providers: [NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
