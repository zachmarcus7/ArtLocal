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
    CheckoutComponent,
    CustomerRegisterComponent, 
    CustomerLoginComponent, 
    FormExampleComponent, FormOneComponent, FormTwoComponent
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