import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectComponent } from './subject.component';
import { SubjectService } from './subject.service';


@NgModule({
  imports: [
    CommonModule,
    SubjectRoutingModule
  ],
  exports: [
    SubjectComponent
  ],
  declarations: [
    SubjectComponent
  ],
  providers: [
    SubjectService
  ]
})
export class SubjectModule { }
