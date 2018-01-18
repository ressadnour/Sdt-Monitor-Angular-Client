import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../../services/alert.service';

@Component({
    selector: 'app-notification',
    templateUrl: './notification.component.html',
    styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
    public alerts: Array<any> = [];
    constructor(public alertService: AlertService ) { }


    ngOnInit() {
        this.alerts =this.alertService.alerts;
     }
}
