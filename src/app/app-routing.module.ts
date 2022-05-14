import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HelloComponent } from './components/hello/hello.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
