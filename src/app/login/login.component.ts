import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as sha1 from 'js-sha1';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {UserService} from '../_service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  formUsername: FormControl = new FormControl('', [Validators.required]);
  formPassword: FormControl = new FormControl('', [Validators.required, Validators.maxLength(200)]);
  loginClicked = false;

  deferredPrompt: any;
  showButton = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.loginFormGroup = new FormGroup({
      username: this.formUsername,
      password: this.formPassword
    });
  }
  // @HostListener('window:beforeinstallprompt', ['$event'])
  // onbeforeinstallprompt(e) {
  //   console.log(e);
  //   // Prevent Chrome 67 and earlier from automatically showing the prompt
  //   e.preventDefault();
  //   // Stash the event so it can be triggered later.
  //   this.deferredPrompt = e;
  //   this.showButton = true;
  // }
  //
  //
  // addToHomeScreen() {
  //   // hide our user interface that shows our A2HS button
  //   this.showButton = false;
  //   // Show the prompt
  //   this.deferredPrompt.prompt();
  //   // Wait for the user to respond to the prompt
  //   this.deferredPrompt.userChoice
  //     .then((choiceResult) => {
  //       if (choiceResult.outcome === 'accepted') {
  //         console.log('User accepted the A2HS prompt');
  //       } else {
  //         console.log('User dismissed the A2HS prompt');
  //       }
  //       this.deferredPrompt = null;
  //     });
  // }
  login() {
    const ph = sha1(this.formPassword.value);


    const loginRequest = {
      username: this.formUsername.value,
      password: ph
    };

    this.userService.login(loginRequest).toPromise()
      .then(data => {
        if (data.response.response === 'Success') {
          const employee = data.employee;
          sessionStorage.setItem('employee', JSON.stringify(employee));

          this.router.navigate(['home']);
        } else {
          console.log(data);
        }
      });
  }
}
