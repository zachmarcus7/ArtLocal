import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HighchartsChartModule } from 'highcharts-angular';

import { HeaderComponent, 
         FooterComponent,
         UserHeaderComponent,
         UserLayoutComponent,
         AdminLayoutComponent,
         BlankHeaderComponent,
         MatToolbarHeaderComponent, 
         BlankLayoutComponent } from './layout';
import { AreaComponent } from './components/area/area.component';
import { GeneralContainerComponent } from './components/general-container/general-container.component';
import { GeneralTableComponent } from './components/general-table/general-table.component';
import { LoginButonComponent } from './components/login-buton/login-buton.component';
import { LogoutButtonComponent } from './components/logout-button/logout-button.component';
 
@NgModule({
  imports: [
    HighchartsChartModule,
    FlexLayoutModule,
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatExpansionModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  declarations: [ 
    HeaderComponent, 
    FooterComponent, 
    UserHeaderComponent, 
    UserLayoutComponent, 
    AdminLayoutComponent,
    BlankHeaderComponent,
    BlankLayoutComponent,
    MatToolbarHeaderComponent,
    AreaComponent,
    GeneralContainerComponent,
    GeneralTableComponent,
    LoginButonComponent,
    LogoutButtonComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AdminLayoutComponent,
    UserHeaderComponent,
    UserLayoutComponent,
    BlankHeaderComponent,
    AreaComponent,
    GeneralContainerComponent,
    GeneralTableComponent,
    LoginButonComponent,
    LogoutButtonComponent
  ]
})
export class SharedModule {
}

