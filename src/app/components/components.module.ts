import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './table/table.component';
import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [DashboardComponent, TableComponent],
  imports: [CommonModule, ChartModule],
  exports: [DashboardComponent, TableComponent, CommonModule, FormsModule]
})
export class ComponentsModule { }
