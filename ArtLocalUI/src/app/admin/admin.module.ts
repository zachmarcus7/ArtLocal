import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminLoginComponent, AdminDashboardComponent, AdminArtistEditComponent } from './pages';
import { AdminArtstyleEditComponent } from './pages/admin-artstyle-edit/admin-artstyle-edit.component';
import { AdminGalleryEditComponent } from './pages/admin-gallery-edit/admin-gallery-edit.component';
import { AdminArtworkEditComponent } from './pages/admin-artwork-edit/admin-artwork-edit.component';
import { AdminCustomerEditComponent } from './pages/admin-customer-edit/admin-customer-edit.component';
import { AdminInvoiceEditComponent } from './pages/admin-invoice-edit/admin-invoice-edit.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminArtistEditComponent,
    AdminArtstyleEditComponent,
    AdminGalleryEditComponent,
    AdminArtworkEditComponent,
    AdminCustomerEditComponent,
    AdminInvoiceEditComponent
  ],
  exports: [
  ]
})
export class AdminModule {
}