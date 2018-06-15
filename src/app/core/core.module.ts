import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// Components
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [NavigationComponent],
  exports: [NavigationComponent, HttpClientModule]
})
export class CoreModule { }
