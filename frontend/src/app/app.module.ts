import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, SidebarComponent } from './components';
import { PageInfoComponent } from './components/page-info/page-info.component';
import { HomeComponent } from './pages';
import { BarChartsComponent } from './pages/bar-charts/bar-charts.component';
import { BloodPressureComponent } from './pages/blood-pressure/blood-pressure.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { FluidVolumeComponent } from './pages/fluid-volume/fluid-volume.component';
import { ImpedanceComponent } from './pages/impedance/impedance.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    HomeComponent,
    PageInfoComponent,
    BarChartsComponent,
    CalendarComponent,
    BloodPressureComponent,
    FluidVolumeComponent,
    ImpedanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FullCalendarModule,
    NgxSkeletonLoaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
