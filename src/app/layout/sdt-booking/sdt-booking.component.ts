import { log } from 'util';
import { forEach } from '@angular/router/src/utils/collection';
import { any } from 'codelyzer/util/function';
import { Observable } from 'rxjs/Observable';
import { SdtBookingService } from './../../services/sdt-booking.service';

import { StatComponent } from '../../shared/modules/stat/stat.component';
import { Component, Injectable, Input, OnInit } from '@angular/core';
import { routerTransition } from "../../router.animations";
import { DataTableResource } from "angular-4-data-table";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as moment from 'moment';
import { Log } from '../../model/Log';
import { WebService } from '../../model/WebService';

@Component({
  selector: 'app-sdt-booking',
  templateUrl: './sdt-booking.component.html',
  styleUrls: ['./sdt-booking.component.scss'],
  animations: [routerTransition()]
})
@Injectable()
export class SdtBookingComponent implements OnInit {

  logs: Log[];

  logFilesItemResource;
  LogFilesItems: Log[] = [];
  logFilesItemCount = 0;
  logFilesParams: any;

  webMethodsItemResource;
  webMethodItems = [];
  webMethodItemCount = 0;
  webMethodParams: any;

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    moment().add(-4, 'days').format("DD MMM"),
    moment().add(-3, 'days').format("DD MMM"),
    moment().add(-2, 'days').format("DD MMM"),
    moment().add(-1, 'days').format("DD MMM"),
    moment().format("DD MMM")];

  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;
  public barChartData: any[] = [
    { data: [0, 0, 0, 0, 0], label: 'PL' },
    { data: [0, 0, 0, 0, 0], label: 'ES' },
    { data: [0, 0, 0, 0, 0], label: 'IT' },
    { data: [0, 0, 0, 0, 0], label: 'FR' },
    { data: [0, 0, 0, 0, 0], label: 'PT' },
    { data: [0, 0, 0, 0, 0], label: 'IE' },
    { data: [0, 0, 0, 0, 0], label: 'GB' }
  ];
  showProgressLogs: boolean;

  constructor(private sdtBookingService: SdtBookingService, private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    let timer = Observable.timer(0, 60000);
    timer.subscribe(() => {
      this.sdtBookingService.getServerStatus();
      this.initializeTableLogsList();
      this.initializeTableWebMethodsList();
      this.extractLogsStatistics();
    });

  }

  initializeTableLogsList() {
    // this.spinnerService.show();
    this.sdtBookingService.getServersLogs()
      .subscribe(data => {
        this.sdtBookingService.logsReceived = true;
        this.sdtBookingService.logsLastRefreshDate = moment().format("DD MMM HH:mm:ss")
        this.logs = data;
        this.initializeTableLogs(data);
        this.sdtBookingService.nextLogsValueFromServerSubject.next();
      });
  };

  initializeTableLogs(logs: Log[]) {
    this.logFilesItemResource = new DataTableResource(logs);
    this.logFilesItemResource.count().then(count => this.logFilesItemCount = count);
    this.logFilesItemResource.query({ offset: 0 }).then(items => this.LogFilesItems = items);
  }

  initializeTableWebMethodsList(): any {
    this.sdtBookingService.getWebServicesStatuses()
      .subscribe(ArrayOfWsDto => {
        this.sdtBookingService.WsReceived = true;
        this.sdtBookingService.wsLastRefreshDate = moment().format("DD MMM HH:mm:ss");
        this.initializeTableWs(ArrayOfWsDto);
        this.sdtBookingService.nextLogsValueFromServerSubject.next();
      });
  }

  initializeTableWs(ws: WebService[]) {
    this.webMethodsItemResource = new DataTableResource(ws);
    this.webMethodsItemResource.count().then(count => this.webMethodItemCount = count);
    this.webMethodsItemResource.query({ offset: 0 }).then(items => this.webMethodItems = items);
  }


  extractLogsStatistics(): any {
    this.sdtBookingService.getServersLogsStatistics()
      .subscribe(barChartDataDto => {
        this.barChartData = barChartDataDto;
        console.log(this.barChartData);
        this.sdtBookingService.nextStatsValueFromServerSubject.next();
      });
  }

  reloadLogFilesItems(logFilesParams) {
    if (!this.logFilesItemResource) return;
    this.logFilesParams = logFilesParams;
    // this.initializeTableLogsList();
    this.logFilesItemResource.query(logFilesParams).then(items => this.LogFilesItems = items);
  }

  reloadwebMethodsItems(webMethodParams) {
    if (!this.webMethodsItemResource) return;
    this.webMethodParams = webMethodParams;
    // this.initializeTableLogsList();
    this.webMethodsItemResource.query(webMethodParams).then(items => this.webMethodItems = items);
  }


  public randomize(): void {
    // Only Change 3 values
    const data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
}
}
