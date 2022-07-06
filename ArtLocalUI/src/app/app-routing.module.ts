import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, 
         DetailsComponent, 
         CheckoutComponent, 
         CustomerRegisterComponent,
         CustomerLoginComponent } from './home';

const routes: Routes = [{
  path: '', component: HomeComponent
}, {
  path: 'login', component: CustomerLoginComponent
}, {
  path: 'register', component: CustomerRegisterComponent
}, {
  path: 'details', component: DetailsComponent
}, {
  path: 'checkout', component: CheckoutComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

