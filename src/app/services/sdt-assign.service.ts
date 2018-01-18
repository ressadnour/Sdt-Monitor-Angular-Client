import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";
import { log } from 'util';


@Injectable()
export class SdtAssignService {
  description: string;
  lastRefreshTime: any;
  webServicesList: any[];
  lastRefreshDate: string;
  logsFiles: any[];
  routingLink: string;
  status: string;
  name: string;
  wsLastRefreshDate: string;
  charactersChanged = new Subject<void>();

  constructor(private http: Http) {
    this.name = 'Sdt Assign';
    this.status = 'down';
    this.routingLink = 'sdt-assign';
    this.logsFiles = [];
    this.webServicesList = [];
    this.lastRefreshTime = moment().format("HH:mm");
    this.description = 'Sdt Assign Description';
    this.getServerStatus();
  }

  getServerStatus() {
    return this.http.get('http://localhost:54792/Api/SdtAssignServer/Status/')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
      )
      .subscribe(data => {
        this.lastRefreshDate = moment(data['LastRefresh']).format("DD MMM HH:mm:ss");
        this.description = data['ServerDescription'];
        this.name = data['ServerName'];
        this.status = data['Status'];
      });
  }

  getServersStatistics() {
    return this.http.get('http://localhost:54792/Api/SdtAssignServer/Statistics/')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
      )
  }

  getWebServicesStatuses()
  {
   return this.http.get('http://localhost:54792/Api/SdtAssignServer/WmStatuses/')
   .map(
     (response: Response) => {
       const data = response.json();
       return data;
     }
   );
  }

}
