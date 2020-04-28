import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.css']
})
export class DataCellComponent implements OnInit {
  cellValue: string ="1119 fehér"
  constructor() { }

  ngOnInit(): void {
  }

}
