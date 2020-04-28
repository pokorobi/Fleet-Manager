import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {

  cols: {key: string, text: string}[] = [
    {key: 'id', text: '#'},
    {key: 'name', text: 'Name'},
    {key: 'email', text: 'Email'},
    {key: 'phone', text: 'Phone'},
    {key: 'city', text: 'City'},
    {key: 'addres', text: 'Addres'}
  ];

  deleteIconClass: string = 'fa fa-trash-o';

  constructor() {
    setInterval( () => {
      this.deleteIconClass = this.deleteIconClass == 'fa fa-trash-o' ? 'fa fa-trash' : 'fa fa-trash-o';
      // if (this.deleteIconClass == 'fa fa-trash-o'){
      //   this.deleteIconClass = 'fa fa-trash';
      // }else {
      //   this.deleteIconClass = 'fa fa-trash-o';
      // }
    }, 1000);
   }

  ngOnInit(): void {
  }

  onUpdate($event): void {
    alert('Click on update button.');
  }

  onDelete($event): void {
    alert(`Click on ${$event} button.`);
  }
}
