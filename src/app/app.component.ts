import { Component, OnInit } from '@angular/core';
import { BaseService } from './service/base.service';
import { ConfigService } from './service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Fleet Manager';
  driver: any = {}; // ez egy üres objektum
  cols: any[] = [];  // ez egy any tömb lesz

  constructor(
    private baseService: BaseService, // a baseServie ezt be injektáljuk tehát igy fogja látni az adatokat
    private config: ConfigService
  ) {
  }

  ngOnInit() { // ez egy metodus
    this.driver = this.baseService.getAll('drivers');
    this.cols = this.config.cols.drivers;
  }
}
