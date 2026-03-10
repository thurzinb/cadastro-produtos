import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './product-component/product-component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home-component/home-component';
import { FooterComponent } from './footer-component/footer-component';
import { NavBarComponent } from './nav-bar-component/nav-bar-component';
import { ClientComponent } from './client-component/client-component';

@NgModule({
  declarations: [
    App,
    ProductComponent,
    HomeComponent,
    FooterComponent,
    NavBarComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
