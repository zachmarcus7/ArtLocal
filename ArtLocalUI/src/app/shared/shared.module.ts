import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HeaderComponent, 
         FooterComponent,
         UserHeaderComponent,
         UserLayoutComponent,
         AdminLayoutComponent,
         BlankHeaderComponent,
         MatToolbarHeaderComponent, 
         BlankLayoutComponent } from './layout';
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule
  ],
  declarations: [ 
    HeaderComponent, 
    FooterComponent, 
    UserHeaderComponent, 
    UserLayoutComponent, 
    AdminLayoutComponent,
    BlankHeaderComponent,
    BlankLayoutComponent,
    MatToolbarHeaderComponent
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

