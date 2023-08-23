import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartsComponent, HomeComponent } from './pages';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bar-charts', component: BarChartsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
