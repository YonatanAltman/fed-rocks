import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent, NewComponent} from './header/header.component';
import { TableComponent } from './table/table.component';
import { ReportsComponent } from './reports/reports.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableComponent,
    ReportsComponent,
    ListComponent,
    AboutComponent,
    LayoutComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
