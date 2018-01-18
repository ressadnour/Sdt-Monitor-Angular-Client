import { RfsUpdaterService } from '../../services/rfs-updater.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Observable } from 'rxjs';
import { DataTableResource } from 'angular-4-data-table';
import { RfsCloserService } from '../../services/rfs-closer.service';

@Component({
  selector: 'app-rfs-updater',
  templateUrl: './rfs-updater.component.html',
  styleUrls: ['./rfs-updater.component.scss'],
  animations: [routerTransition()]
})
@Injectable()
export class RfsUpdaterComponent implements OnInit {

  webMethodsItemResource;
  webMethodItems = [];
  webMethodItemCount = 0;
  webMethodParams : any;
  // bar chart
public barChartOptions: any = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType: string = 'bar';
public barChartLegend: boolean = true;

public barChartData: any[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
  { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];
  constructor(private rfsUpdaterService: RfsUpdaterService) {
    this.initializeTableWebMethodsList();
  }

    ngOnInit() {
      this.rfsUpdaterService.getServerStatus();
      this.initializeTableWebMethodsList();
      let timer = Observable.timer(20000, 60000);
      timer.subscribe(() => {
        this.rfsUpdaterService.getServerStatus();
        this.initializeTableWebMethodsList()
      });
    }
  
    initializeTableWebMethodsList(): any {
      this.webMethodsItemResource = new DataTableResource(this.rfsUpdaterService.webServicesList);
      this.webMethodsItemResource.count().then(count => this.webMethodItemCount = count);
      if (this.webMethodParams != null) this.webMethodsItemResource.query(this.webMethodParams).then(items => this.webMethodItems = items);
    }
  }
  