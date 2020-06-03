import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() list: any[]; // egy lista ami egy tömb
  @Input() cols: any[];

  deleteIconClass: string = 'fa fa-trash';

  constructor(
  ) {}

  ngOnInit(): void {
  }

  onUpdate($event): void {
    alert('Click on update button.');
  }

  onDelete($event): void {
    alert(`Click on ${$event} button.`);
  }
}
