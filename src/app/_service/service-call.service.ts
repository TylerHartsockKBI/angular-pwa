import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {ServiceCallDisplay} from '../_models/service-call-display';

@Injectable({
  providedIn: 'root'
})
export class ServiceCallService {

  constructor(private http: HttpClient) { }

  getServiceCalls() {
    // const headers = new HttpHeaders()
    //   .append('Content-Type', 'application/json')
    //   // .append('Authorization', 'Bearer ' + this.userService.token)
    //   // .append('Cache-Control', 'no-cache, no-store, must-revalidate, post-check=0, pre-check=0')
    //   // .append('Pragma', 'no-cache')
    //   // .append('Expires', '0');
    //
    // // let params = new HttpParams();
    // // params = params.append('officeID', String(1));
    // const options = { headers };

    return this.http.get('https://www.kensbeverage.com/MODIS2/service-calls/reactive?officeID=2');
  }
}
