import { FormsModule } from '@angular/forms';
import { DataTableModule } from 'angular-4-data-table/dist';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { ChartsModule } from 'ng2-charts';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfsCloserRoutingModule } from './rfs-closer-routing.module';
import { RfsCloserComponent } from './rfs-closer.component';

@NgModule({
  imports: [
    CommonModule,
    StatModule,
    ChartsModule,
    RfsCloserRoutingModule,
    PageHeaderModule,
    DataTableModule,
    FormsModule
  ],
  declarations: [RfsCloserComponent],
  exports: [RfsCloserComponent]
})
export class RfsCloserModule { }
