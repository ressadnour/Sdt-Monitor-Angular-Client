import { Component, NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';


const layoutRoutes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard',   loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'sdt-booking', loadChildren: './sdt-booking/sdt-booking.module#SdtBookingModule' },
      { path: 'sdt-assign',  loadChildren: './sdt-assign/sdt-assign.module#SdtAssignModule' },
      { path: 'rfs-closer',  loadChildren: './rfs-closer/rfs-closer.module#RfsCloserModule' },
      { path: 'rfs-updater',  loadChildren: './rfs-updater/rfs-updater.module#RfsUpdaterModule' }
    ]
  }
];

@NgModule({
imports: [RouterModule.forChild(layoutRoutes)],
exports: [RouterModule]
})

export class LayoutRoutingModule {}
