import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import { AmdinOverzichtComponent } from './overzicht/overzicht.component';

const routes: Routes = [
  { path: '', component: AmdinOverzichtComponent },
  { path: 'admin', component: AmdinOverzichtComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
