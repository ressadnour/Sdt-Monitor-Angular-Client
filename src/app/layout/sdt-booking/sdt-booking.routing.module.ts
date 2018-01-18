import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SdtBookingComponent } from './sdt-booking.component';

const sdtbookingRoutes: Routes = [
  {path: '', component: SdtBookingComponent}
];
@NgModule({
  imports: [RouterModule.forChild(sdtbookingRoutes)],
  exports: [RouterModule]
})
export class SdtBookingRoutingModule { }
