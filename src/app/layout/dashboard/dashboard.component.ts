import { SdtAssignService } from '../../services/sdt-assign.service';
import { SdtBookingService } from './../../services/sdt-booking.service';

import { Component, OnInit, Injectable } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { SdtBookingComponent } from "../sdt-booking/sdt-booking.component";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()],
    providers: []
})
@Injectable()
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];
    
    
    constructor(private sdtBookingService: SdtBookingService ,private  sdtAssignService: SdtAssignService) {

        this.sliders.push({
            imagePath: 'assets/images/slider1.jpg',
            label: 'First slide label',
            text: '1.'
        }, {
            imagePath: 'assets/images/slider2.jpg',
            label: 'Second slide label',
            text: '2.'
        }, {
            imagePath: 'assets/images/slider3.jpg',
            label: 'Third slide label',
            text: '3.'
        });

        this.alerts.push({
            id: 1,
            type: 'success',
            message: `web service on rfs comments extraction crash, lockdown issue repeated`
        }, {
            id: 2,
            type: 'warning',
            message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
        });
    }

    ngOnInit() {
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
