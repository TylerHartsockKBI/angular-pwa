import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {LoginResponse} from '../_models/login-response';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(request: any) {
    const headers = new HttpHeaders().append('Content-Type', 'application/json');
    const options = {headers};
    // baseURL: 'https://www.kensbeverage.com/MODIS2',

    return this.httpClient.post<LoginResponse>('https://www.kensbeverage.com/MODIS2/app/login', request, options);
  }
}
