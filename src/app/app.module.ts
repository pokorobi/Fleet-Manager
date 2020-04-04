import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './part/menu/menu.component';
import { DataTableComponent } from './part/data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
