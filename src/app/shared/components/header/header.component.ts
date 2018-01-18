import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from "../../../auth/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isAuthenticated;
//   language = 'Language';
  constructor(private translate: TranslateService, public router: Router, private authService: AuthService) {
    this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd && window.innerWidth <= 992) {
            this.toggleSidebar();
        }
    });
  //  this.isAuthenticated = authService.isAuthenticated();
  this.isAuthenticated = false;
}

  ngOnInit() {
  }

  toggleSidebar() {
    const dom: any = document.querySelector('body');
    dom.classList.toggle('push-right');
}

onLoggedout() {
    this.authService.onLoggedout();
}

changeLang(language: string) {
    this.translate.use(language);
}


}
