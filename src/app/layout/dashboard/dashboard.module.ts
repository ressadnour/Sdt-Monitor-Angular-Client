import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    NgbCarouselModule,
    NgbAlertModule
} from '@ng-bootstrap/ng-bootstrap';


import { DashboardComponent } from './dashboard.component';
import {
    TimelineComponent,
    NotificationComponent,
    ChatComponent
} from './components';
import { DashboardRoutingModule } from "./dashboard.routing.module";
import { StatModule } from "../../shared/modules/stat/stat.module";
import { SdtBookingModule } from "../sdt-booking/sdt-booking.module";
import { SdtAssignModule } from "../sdt-assign/sdt-assign.module";
import { RfsCloserModule } from "../rfs-closer/rfs-closer.module";
import { RfsUpdaterModule } from "../rfs-updater/rfs-updater.module";

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        SdtBookingModule,
        SdtAssignModule,
        RfsCloserModule,
        RfsUpdaterModule
    ],
    declarations: [
        DashboardComponent,
        TimelineComponent,
        NotificationComponent,
        ChatComponent
    ]
})
export class DashboardModule { }
