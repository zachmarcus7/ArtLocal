import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';

import { HeaderComponent, 
         FooterComponent,
         UserHeaderComponent,
         UserLayoutComponent,
         AdminLayoutComponent,
         BlankHeaderComponent} from './layout';
import { BlankLayoutComponent } from './layout/blank-layout/blank-layout.component';
 
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatExpansionModule
  ],
  declarations: [ 
    HeaderComponent, 
    FooterComponent, 
    UserHeaderComponent, 
    UserLayoutComponent, 
    AdminLayoutComponent,
    BlankHeaderComponent,
    BlankLayoutComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    UserHeaderComponent,
    UserLayoutComponent,
    BlankHeaderComponent
  ]
})
export class SharedModule {
}

