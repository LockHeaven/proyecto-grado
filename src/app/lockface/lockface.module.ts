import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './shared/shared.module';

import { ScreensModule } from './screens/screens.module';
import { ScreensRoutingModule } from './screens/screens-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, SharedModule, ScreensModule, ScreensRoutingModule],
})
export class LockfaceModule {}
