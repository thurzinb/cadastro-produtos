import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ProductComponent } from './product-component/product-component';
import { ClientComponent } from './client-component/client-component';


const routes: Routes = [
    {path: '',        component: HomeComponent},
    {path: 'product', component: ProductComponent},
    {path: 'client',  component: ClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
