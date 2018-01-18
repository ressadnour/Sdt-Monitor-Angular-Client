import { DashboardComponent } from './dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const DashboardRoutes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  imports:  [RouterModule.forChild(DashboardRoutes)],
  exports:  [RouterModule]
})
export class DashboardRoutingModule {}
