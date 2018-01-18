import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RfsCloserComponent } from './rfs-closer.component';

const routes: Routes = [
  {path: '', component: RfsCloserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RfsCloserRoutingModule { }
