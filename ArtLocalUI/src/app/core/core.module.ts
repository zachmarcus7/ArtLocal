import { NgModule } from '@angular/core';
import { TokenInterceptor } from './interceptors';
import { ApiService, AuthService } from './services';
 
 
@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ApiService,
    AuthService,
    TokenInterceptor
  ]
})
export class CoreModule {
}