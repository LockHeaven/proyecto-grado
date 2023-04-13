import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ComponentsModule } from './components/components.module';
import { WidgetsModule } from './widgets/widgets.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HighchartsChartModule } from 'highcharts-angular';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';



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
    SweetAlert2Module,
  ]
})
export class SharedModule { }
