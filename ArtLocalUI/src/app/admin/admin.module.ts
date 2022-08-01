import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AdminLoginComponent, 
         AdminDashboardComponent, 
         AdminArtistEditComponent,
         AdminArtstyleEditComponent, 
         AdminGalleryEditComponent, 
         AdminArtworkEditComponent, 
         AdminCustomerEditComponent,
         AdminInvoiceEditComponent,
         AdminArtworkNewComponent, 
         AdminArtworkExistingComponent } from './pages';
import { SharedModule } from 'src/app/shared';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminArtistEditComponent,
    AdminArtstyleEditComponent,
    AdminGalleryEditComponent,
    AdminArtworkEditComponent,
    AdminCustomerEditComponent,
    AdminInvoiceEditComponent,
    AdminArtworkNewComponent,
    AdminArtworkExistingComponent
  ],
  exports: [
  ]
})
export class AdminModule {
}