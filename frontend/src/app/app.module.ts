import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, SidebarComponent } from './components';
import { PageInfoComponent } from './components/page-info/page-info.component';
import { HomeComponent } from './pages';
import { BarChartsComponent } from './pages/bar-charts/bar-charts.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, HeaderComponent, HomeComponent, PageInfoComponent, BarChartsComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
