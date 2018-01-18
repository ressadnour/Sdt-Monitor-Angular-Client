
import { Component, OnInit, ViewChild } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { routerTransition } from "../../router.animations";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
 // @ViewChild('f') fomuser: NgForm;
repeatPasswordValid: Boolean = true;

 constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  Register(f: NgForm) {
      if (f.value.password !== f.value.repeatPassword) {
          this.repeatPasswordValid = false;
        }  else    {

          this.repeatPasswordValid = true;
          this.authService.signupUser(f.value.email, f.value.password);
          this.router.navigate(['/dashboard']);
        }
  }

  /**
   *
   *
   * @param {any} f
   * @memberof SignupComponent
   */
  onblur(f) {

    if (f.value.password !== f.value.repeatPassword) {
        this.repeatPasswordValid = false;
      } else {
        this.repeatPasswordValid = true;
      }
  }

}
