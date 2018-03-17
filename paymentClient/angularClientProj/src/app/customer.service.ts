import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomerService {

  constructor(private service:Http) { }

  getCustomers():Observable<any[]>{
    return this.service.get('http://localhost:3000/getCustomers')
                .map(res => res.json());
  }
}
