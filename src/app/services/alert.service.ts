import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {
  alerts: { title: string; date: string; }[];

  constructor() {
    this.alerts = [
      {title: 'New Comment', date: '4 minutes ago'},
      {title: 'New Comment', date: '4 minutes ago'}];
   }

}
