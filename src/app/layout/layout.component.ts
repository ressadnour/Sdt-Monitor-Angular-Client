import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    // if (this.router.url === '/') {
    //   this.router.navigate(['/dashboard']);
  //}
  }

}
