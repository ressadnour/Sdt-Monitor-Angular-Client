import { Component, OnInit } from '@angular/core';
import { TimelineService } from '../../../../services/timeline.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  public timeLines: Array<any> = [];


  constructor(public timeLinesService : TimelineService ) { 
  
  }

  ngOnInit() {
    this.timeLines =this.timeLinesService.timeLines;
  }

}
