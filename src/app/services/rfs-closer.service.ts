import { Subject } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class RfsCloserService {
  lastRefreshDate: string;

  description: string;
  lastRefreshTime: any;
  webServicesList: any[];
  logsFiles: any[];
  routingLink: string;
  status: string;
  name: string;
  charactersChanged = new Subject<void>();
  
  constructor(private http: Http) {
    this.name = 'Sdt Rfs Closer';
    this.status = 'down';
    this.routingLink = 'sdt-rfs-closer';
    this.logsFiles = [];
    this.webServicesList = [];
    this.lastRefreshTime = moment().format("HH:mm");
    this.description = 'Sdt Rfs Closer';
    this.getServerStatus();
  }

  getServerStatus() {
    return this.http.get('http://localhost:54792/Api/SdtAssign/')
      .map(
      (response: Response) => {
        const data = response.json();
        return data;
      }
      )
      .subscribe(data => {
        this.lastRefreshDate = moment().format("DD MMM HH:mm:ss")
        this.name = data['ServerName'];
        this.status = data['ServerName'];
        this.description = data['description'];
        this.logsFiles = data['listOfExtractedFilesDto'];
        this.webServicesList = data['ListOfWsDto'];
        this.charactersChanged.next();
      });
  }


}
