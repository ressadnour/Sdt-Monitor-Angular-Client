import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class RfsUpdaterService {

  description: string;
  lastRefreshTime: any;
  webServicesList: any[];
  logsFiles: any[];
  routingLink: string;
  status: string;
  name: string;


  constructor(private http: Http) {
    this.name = 'Sdt Rfs Updater';
    this.status = 'down';
    this.routingLink = 'sdt-rfs-updater';
    this.logsFiles = [];
    this.webServicesList = [];
    this.lastRefreshTime = moment().format("HH:mm");
    this.description= 'Sdt Rfs Updater'; 
    this.getServerStatus();
   }

   getServerStatus(): any {
  }

}
