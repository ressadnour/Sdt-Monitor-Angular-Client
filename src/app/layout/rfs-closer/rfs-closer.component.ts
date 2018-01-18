import { RfsCloserService } from '../../services/rfs-closer.service';
import { routerTransition } from '../../router.animations';
import { Component, Injectable, OnInit } from '@angular/core';
import { StatComponent } from '../../shared/modules/stat/stat.component';
import { DataTableResource } from 'angular-4-data-table';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-rfs-closer',
  templateUrl: './rfs-closer.component.html',
  styleUrls: ['./rfs-closer.component.scss'],
  animations: [routerTransition()]
})
@Injectable()
export class RfsCloserComponent implements OnInit {
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
  constructor(private rfsCloserService: RfsCloserService) { 
    this.initializeTableWebMethodsList();
  }

  ngOnInit() {
    this.rfsCloserService.getServerStatus();
    this.initializeTableWebMethodsList();
    let timer = Observable.timer(20000, 60000);
    timer.subscribe(() => {
      this.rfsCloserService.getServerStatus();
      this.initializeTableWebMethodsList()
    });
  }

  initializeTableWebMethodsList(): any {
    this.webMethodsItemResource = new DataTableResource(this.rfsCloserService.webServicesList);
    this.webMethodsItemResource.count().then(count => this.webMethodItemCount = count);
    if (this.webMethodParams != null) this.webMethodsItemResource.query(this.webMethodParams).then(items => this.webMethodItems = items);
  }
}
