import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorRoutingModule } from './tutor-routing.module';
import { SubjectComponent } from '../subject/subject.component';
import { SubjectService } from '../subject/subject.service';


@NgModule({
  declarations: [
    SubjectComponent
  ],
  imports: [
    CommonModule,
    TutorRoutingModule
  ],
  exports: [
    SubjectComponent,
  ],
  providers: [
    SubjectService
  ]
})
export class TutorModule { }
