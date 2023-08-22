import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarChartsComponent, HomeComponent } from './pages';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'bar-charts', component: BarChartsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
