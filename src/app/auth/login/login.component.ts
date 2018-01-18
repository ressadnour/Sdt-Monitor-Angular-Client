
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';


import { routerTransition } from "../../router.animations";
import { AuthService } from "../auth.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
 // @ViewChild('f') form: NgForm;
  constructor(private router : Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoggedin(form: NgForm) {
    this.authService.signInUser(form.value.email, form.value.password )
}

}
