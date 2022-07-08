import { NgModule } from '@angular/core';
import { AdminAuthenticationService, ApiService, AuthenticationService } from './services';
 
 
@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ApiService,
    AuthenticationService,
    AdminAuthenticationService
  ]
})
export class CoreModule {
}