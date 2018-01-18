import { log } from 'util';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from "rxjs/Observable";  
import * as moment from 'moment';
import { Subject } from "rxjs/Subject";


@Injectable()
export class SdtBookingService {
  logsReceived: boolean;
  WsReceived: boolean;
  logsLastRefreshDate: string;
  wsLastRefreshDate: string;
  webServicesList: any[];
  lastRefreshTime: string;
  lastRefreshDate: string;
  routingLink: string;
  name: string;
  status: string;
  logsFiles: string[];
  lastRefreshDateTime: string;
  description: string; 
  nextLogsValueFromServerSubject = new Subject<void>();
  nextStatsValueFromServerSubject = new Subject<void>();
  barChartData: any[];

  constructor(private http: Http) {
    this.name = 'Sdt Booking';
    this.status = 'down';
    this.routingLink = 'sdt-booking';
    this.logsFiles = [];
    this.webServicesList = [];
    this.lastRefreshTime = moment().format("HH:mm");
    this.description= 'Sdt Booking Description'; 
    this.getServerStatus();
   }

   getServerStatus()
   {
    return this.http.get('http://localhost:54792/Api/SdtBooking/Status/')
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    )
    .subscribe(data => {
      this.lastRefreshDate = moment().format("DD MMM HH:mm:ss")
      this.description= "Service Center Agent's application used to dispatch FSEs"; 
      this.name = 'Sdt Booking';
      this.status = 'up';
      //this.nextValueFromServerSubject.next();
    });
   }

   getServersLogs()
   {
     this.logsReceived = false;
    return this.http.get('http://localhost:54792/Api/SdtBooking/Logs/')
    .map(
      (response: Response) => {
        const data = response.json();
        return data['ListOfExtractedFilesDto'];
      }
    );
   }

   getServersLogsStatistics()
   {
     this.logsReceived = false;
     return this.http.get('http://localhost:54792/Api/SdtBooking/Statistics/')
    .map(
      (response: Response) => {
        const data = response.json();
        const barChartDataDto: any[] = [];
        let counter = 0;
        for (let i of data)
        {
          barChartDataDto[counter++] =  { data: i.Data, label: i.Label };
        }
        return barChartDataDto;
      }
    )
   }

   getWebServicesStatuses()
   {
     this.logsReceived = false;
    return this.http.get('http://localhost:54792/Api/SdtBooking/WmStatuses/')
    .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
    );
   }

   getAppName() {
    return this.http.get('http://localhost:54792/Api/SdtBooking/')
      .map(
        (response: Response) => {
          return response.json();
        }
      );
  }

}
