import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, DetailsComponent, CheckoutComponent } from './home';

const routes: Routes = [{
  path: '', component: HomeComponent
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

