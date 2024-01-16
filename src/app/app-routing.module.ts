import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BloodPressureComponent, FluidVolumeComponent, HomeComponent, ImpedanceComponent } from './pages';
import { CalendarComponent } from './pages/calendar/calendar.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'blood-pressure', component: BloodPressureComponent },
  { path: 'fluid-volume', component: FluidVolumeComponent },
  { path: 'impedance', component: ImpedanceComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
