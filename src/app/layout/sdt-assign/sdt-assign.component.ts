import { WebService } from '../../model/WebService';
import { Observable } from 'rxjs/Rx';
import { SdtAssignService } from './../../services/sdt-assign.service';
import { routerTransition } from '../../router.animations';
import { Component, OnInit, Injectable } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table';
import * as moment from 'moment';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-sdt-assign',
  templateUrl: './sdt-assign.component.html',
  styleUrls: ['./sdt-assign.component.scss'],
  animations: [routerTransition()]
})

@Injectable()
export class SdtAssignComponent implements OnInit {

  webMethodsItemResource;
  webMethodItems = [];
  webMethodItemCount = 0;
  webMethodParams: any;

  // lineChart
  public lineChartData: Array<any> = [
    { data: [ 0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0,
              0, 0, 0, 0, 0, 0], label: 'Sftp Files' }
  ];
  public lineChartLabels: Array<any> =  [];

  public lineChartOptions: any = {
    responsive: true
  };

  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  constructor(private sdtAssignService: SdtAssignService) {
    let count=0;
    while (count<=24)
    {
      this.lineChartLabels[count] = moment().subtract(1,'days').startOf('day').add(count, 'hours').format("HH:mm");
      count++;
    }
  }
  ngOnInit() {
    let timer = Observable.timer(0, 60000);
    timer.subscribe(() => {
      this.sdtAssignService.getServerStatus();
      this.extractStatistics();
      this.initializeTableWebMethodsList();
    });
  }
  nextLogsValueFromServerSubject = new Subject<void>();
  extractStatistics(): any {
   this.sdtAssignService.getServersStatistics()
      .subscribe(barChartDataDto => {
        console.log(barChartDataDto);
        let i = 0;
        const _lineChartData = JSON.parse(JSON.stringify(this.lineChartData));
         for (let line of barChartDataDto) {
            _lineChartData[0].data[i]  =  line.Count;
            this.lineChartLabels[i] = moment(line.DateTimeExtraction).format('HH:mm');
            i++;
         }
         this.lineChartData = _lineChartData;
      });


  }
 
  // events
  public chartClicked(e: any): void {

  }

  public chartHovered(e: any): void {

  }
  initializeTableWebMethodsList(): any {
    this.sdtAssignService.getWebServicesStatuses()
    .subscribe(ArrayOfWsDto => {
      this.sdtAssignService.wsLastRefreshDate = moment().format("DD MMM HH:mm:ss");
      this.initializeTableWs(ArrayOfWsDto);
      //this.sdtAssignService.nextLogsValueFromServerSubject.next();
    });  }


    initializeTableWs(ws: WebService[]) {
      this.webMethodsItemResource = new DataTableResource(ws);
      this.webMethodsItemResource.count().then(count => this.webMethodItemCount = count);
      this.webMethodsItemResource.query({ offset: 0 }).then(items => this.webMethodItems = items);
    }

    
  reloadwebMethodsItems(webMethodParams) {
    // this.webMethodParams = webMethodParams;
    // this.webMethodsItemResource.query(webMethodParams).then(items => this.webMethodItems = items);
  }
}
