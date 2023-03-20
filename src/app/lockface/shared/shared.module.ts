import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { WidgetsModule } from './widgets/widgets.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule,
    ComponentsModule,
    WidgetsModule,
    FlexLayoutModule,
    HighchartsChartModule,
  ]
})
export class SharedModule { }
