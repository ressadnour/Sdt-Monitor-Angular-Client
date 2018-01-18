import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RfsUpdaterComponent } from './rfs-updater.component';

const routes: Routes = [
  {path: '' , component: RfsUpdaterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfsUpdaterRoutingModule { }
