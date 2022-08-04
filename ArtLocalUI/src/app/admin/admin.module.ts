import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

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
    SharedModule,
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule 
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