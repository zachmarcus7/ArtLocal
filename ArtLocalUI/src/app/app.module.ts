import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';   

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { TokenInterceptor } from './core';
import { HomeModule } from './home';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment as env } from '../environments/environment'; // <----
import { default as auth } from '../../auth_config.json';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthModule.forRoot({  // <------
      ...env.auth   // this is called spreading the object
    }),
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    CoreModule,
    HomeModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

