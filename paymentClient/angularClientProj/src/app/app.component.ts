import { Component } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  custList : any[];

  constructor(service: CustomerService){
    service.getCustomers().subscribe(data => this.custList = data);
  }
}
