import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table';
import { PageHeaderModule } from './../../shared/modules/page-header/page-header.module';
import { ChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SdtAssignRoutingModule } from './sdt-assign-routing.module';
import { SdtAssignComponent } from './sdt-assign.component';
import { StatModule } from '../../shared/modules/stat/stat.module';

@NgModule({
  imports: [
    CommonModule,
    StatModule,
    ChartsModule,
    SdtAssignRoutingModule,
    PageHeaderModule,
    DataTableModule,
    FormsModule
  ],
  declarations: [SdtAssignComponent],
  exports: [SdtAssignComponent]
})
export class SdtAssignModule { 
  
  
}
