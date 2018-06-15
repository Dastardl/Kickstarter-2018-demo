import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmdinOverzichtComponent } from './overzicht/overzicht.component';

import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [AmdinOverzichtComponent],
  exports: [AmdinOverzichtComponent]
})
export class AdminModule { }
