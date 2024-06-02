import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { FormsModule } from '@angular/forms'; 
import { TutorComponent } from './tutor.component';


@NgModule({
  declarations: [
    TutorComponent
  ],
  imports: [
    CommonModule,
    TutorRoutingModule,
    FormsModule
  ],
  exports: [
    TutorComponent,
  ],
  providers: [
  ]
})
export class TutorModule { }
