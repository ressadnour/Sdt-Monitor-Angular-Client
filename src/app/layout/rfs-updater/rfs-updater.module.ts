import { StatModule } from '../../shared/modules/stat/stat.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RfsUpdaterRoutingModule } from './rfs-updater-routing.module';
import { RfsUpdaterComponent } from './rfs-updater.component';
import { ChartsModule } from 'ng2-charts';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
import { DataTableModule } from 'angular-4-data-table';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    StatModule,
    ChartsModule,
    RfsUpdaterRoutingModule,
    PageHeaderModule,
    DataTableModule,
    FormsModule
  ],
  declarations: [RfsUpdaterComponent],
  exports: [RfsUpdaterComponent]
})
export class RfsUpdaterModule { }
