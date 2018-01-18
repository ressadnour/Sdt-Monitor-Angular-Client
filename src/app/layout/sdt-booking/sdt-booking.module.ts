import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataTableModule } from 'angular-4-data-table';
import { FormsModule } from '@angular/forms';
import { StatModule } from '../../shared/modules/stat/stat.module';
import { StatComponent } from './../../shared/modules/stat/stat.component';
import { SdtBookingRoutingModule } from './sdt-booking.routing.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SdtBookingComponent } from './sdt-booking.component';
import { ChartsModule } from 'ng2-charts';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService  } from 'ng4-loading-spinner';
import { PageHeaderModule } from '../../shared/modules/page-header/page-header.module';
@NgModule({
  imports: [
    CommonModule,
    StatModule,
    ChartsModule,
    SdtBookingRoutingModule,
    PageHeaderModule,
    DataTableModule,
    Ng4LoadingSpinnerModule,
    FormsModule
  ],
  declarations: [SdtBookingComponent],
  exports: [SdtBookingComponent]
})
export class SdtBookingModule { }
