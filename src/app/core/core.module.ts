import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent]
})
export class CoreModule { }
