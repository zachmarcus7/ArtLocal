import { NgModule } from '@angular/core';
import { TokenInterceptor } from './interceptors';
import { ApiService, AuthService, JwtService } from './services';
 
 
@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [
    ApiService,
    AuthService,
    TokenInterceptor,
    JwtService
  ]
})
export class CoreModule {
}