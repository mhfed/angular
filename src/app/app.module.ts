import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { TestComponent } from './components/test/test.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductaddComponent } from './components/productadd/productadd.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ProductaddComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
