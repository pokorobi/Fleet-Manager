import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  data = { // data nevezetű változo ami egy objektum lesz,  
    drivers: [ // a drivers egy tömb lesz és a tömbön belül lesznek az egyes driverek az egyes objektumok 
      {
        id: 1,
        name: "Poko Rober",
        email: "poko@gmail.com",
        phone: "+36304561234",
        city: "Budapest",
        addres: "Kis stáció utca 3",
      }
    ],
    vehicles: [
      {
        id: 1,
        lp: "EXC-001",
        years: 2000,
        manufacturer: "Lada",
        consumption: 7,
        engine: "disel",
      }
    ],
    fuelings: [
      {
        id: 1,
        vehicle: 1,
        driver: 1,
        amount: 40,
        date: "2019-04-02",
      }
    ],
  }

  constructor() { }

  getAll(dataType: string): any[] { //ez egy metodus, a getAll leszedi az összes dolgot
    return this.data[dataType];
  }
}
