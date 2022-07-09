import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, 
         DetailsComponent, 
         CheckoutComponent, 
         CustomerRegisterComponent,
         CustomerLoginComponent } from './home';
import { AdminLoginComponent,
         AdminDashboardComponent,
         AdminArtistEditComponent,
         AdminArtworkEditComponent,
         AdminArtstyleEditComponent,
         AdminCustomerEditComponent,
         AdminGalleryEditComponent,
         AdminInvoiceEditComponent,
         AdminArtworkExistingComponent,
         AdminArtworkNewComponent } from './admin';
 

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
}, {
  path: 'admin', component: AdminLoginComponent
}, {
  path: 'admin/dashboard', component: AdminDashboardComponent,
  children: [
    { path: 'artists', component: AdminArtistEditComponent}, 
    { path: 'artwork', component: AdminArtworkEditComponent,
      children: [
        {path: 'new', component: AdminArtworkNewComponent},
        {path: 'existing', component: AdminArtworkExistingComponent}
      ]
    }, 
    { path: 'artstyles', component: AdminArtstyleEditComponent}, 
    { path: 'galleries', component: AdminGalleryEditComponent}, 
    { path: 'customers', component: AdminCustomerEditComponent}, 
    { path: 'invoices', component: AdminInvoiceEditComponent}, 
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

