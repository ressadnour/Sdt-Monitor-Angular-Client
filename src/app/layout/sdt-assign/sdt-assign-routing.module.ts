import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SdtAssignComponent } from './sdt-assign.component';

const sdtAssignRoutes: Routes = [
  {path: '', component: SdtAssignComponent}
];

@NgModule({
  imports: [RouterModule.forChild(sdtAssignRoutes)],
  exports: [RouterModule]
})
export class SdtAssignRoutingModule { }
