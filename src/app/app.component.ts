import { RfsUpdaterService } from './services/rfs-updater.service';
import { RfsCloserService } from './services/rfs-closer.service';
import { SdtAssignService } from './services/sdt-assign.service';
import { SdtBookingService } from './services/sdt-booking.service';

import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as firebase from 'firebase';
import { TimelineService } from './services/timeline.service';
import { AlertService } from './services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SdtBookingService, SdtAssignService, RfsCloserService, RfsUpdaterService,TimelineService,AlertService]
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ur', 'es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr|ur|es/) ? browserLang : 'en');
  }

  ngOnInit() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBGPLn2075b4Jnxx7QPtg1wZ2jtfX5Unmc",
        authDomain: "elklaalevillage.firebaseapp.com"
      }
    );
  }



  
}
