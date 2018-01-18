import { Injectable } from '@angular/core';

@Injectable()
export class TimelineService {
  public timeLines: Array<any> = [];
  
  constructor() {
    this.timeLines = [
      {badge: 'warning', title: 'Web service on Rfs Comments crash, issue solved with restarting service', body: 'Olivier Zink', Hour: '10'},
      {badge: 'danger', title: 'Rfs assignment crash du to Lock issue', body: 'Nour', Hour: '23'}];
   }

}
