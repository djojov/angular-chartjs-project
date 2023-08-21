import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent, SidebarComponent } from './components';
import { HomeComponent } from './pages';
import { PageInfoComponent } from './components/page-info/page-info.component';

@NgModule({
  declarations: [AppComponent, SidebarComponent, HeaderComponent, HomeComponent, PageInfoComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
