import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent, 
         DetailsComponent, 
         CheckoutComponent,
         CustomerRegisterComponent,
         CustomerLoginComponent } from './pages';
import { FormExampleComponent } from './pages/form-example/form-example.component';
import { FormOneComponent } from './pages/form-one/form-one.component';
import { FormTwoComponent } from './pages/form-two/form-two.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatSlideToggleModule,
    MatProgressBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  declarations: [ 
    HomeComponent, 
    DetailsComponent, 
    CheckoutComponent,
    CustomerRegisterComponent, 
    CustomerLoginComponent, 
    FormExampleComponent, 
    FormOneComponent, 
    FormTwoComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HomeComponent,
    FormExampleComponent
  ]
})
export class HomeModule {
}