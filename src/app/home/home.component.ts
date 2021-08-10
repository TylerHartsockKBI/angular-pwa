import { Component, OnInit } from '@angular/core';
import {ServiceCallService} from '../_service/service-call.service';
import {ServiceCallDisplay} from '../_models/service-call-display';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private serviceCallService: ServiceCallService) { }

  serviceCallDisplays: any;

  install() {
    console.log('install');
  }

  logout() {
    this.router.navigate(['login']);
  }

  ngOnInit(): void {
    this.serviceCallService.getServiceCalls().toPromise()
      .then(serviceCalls => {
        this.serviceCallDisplays = serviceCalls;
        console.log(serviceCalls);
      });
  }

}
