import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  cols = { //ez egy változó, objektum
    drivers: [ // ez egy tömb ami egy objektumban van benne
      { key: 'id', text: '#' },
      { key: 'name', text: 'Name' },
      { key: 'email', text: 'Email' },
      { key: 'phone', text: 'Phone' },
      { key: 'city', text: 'City' },
      { key: 'addres', text: 'Addres' }
    ],
    vehicles: [
      { key: "id", text: "#" },
      { key: "lp", text: "LP." },
      { key: "years", text: "Year" },
      { key: "manufacturer", text: "Man." },
      { key: "consumption", text: "Cons" },
      { key: "engine", text: "Eng." },
    ],
    fuelings: [
      { key: "id", text: "#" },
      { key: "vehicle", text: "Vehicle" },
      { key: "driver", text: "Driver" },
      { key: "amount", text: "Amount" },
      { key: "date", text: "Date" },
    ]
  };

  constructor() { }
}
