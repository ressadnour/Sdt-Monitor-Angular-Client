import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './../shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './../shared/components/header/header.component';
import { LayoutRoutingModule } from './layout.routing.module';
import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule,
     NgbDropdownModule.forRoot(),
     LayoutRoutingModule],

  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent
  ],
  exports: [
    CommonModule,
    TranslateModule
]
})
export class LayoutModule { }
