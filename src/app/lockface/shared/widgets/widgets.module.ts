import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area/area.component';
import { PieComponent } from './pie/pie.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { MaterialModule } from '../material/material.module';
import { ColumnComponent } from './column/column.component';



@NgModule({
  declarations: [
    AreaComponent,
    PieComponent,
    ColumnComponent
  ],
  imports: [
    MaterialModule,
    CommonModule,
    FlexLayoutModule,
    HighchartsChartModule
  ], 
  exports: [
    AreaComponent,
    PieComponent,
    ColumnComponent
  ]
})
export class WidgetsModule { }
