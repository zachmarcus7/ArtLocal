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


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  declarations: [ 
    HomeComponent, 
    DetailsComponent, 
    CustomerRegisterComponent, 
    CustomerLoginComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    HomeComponent
  ]
})
export class HomeModule {
}