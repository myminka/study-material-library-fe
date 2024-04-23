import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialRoutingModule } from './study-material-routing.module';
import { StudyMaterialComponent } from './study-material.component';


@NgModule({
  declarations: [StudyMaterialComponent],
  exports: [StudyMaterialComponent],
  imports: [
    CommonModule,
    StudyMaterialRoutingModule
  ],
  providers:[]
})
export class StudyMaterialModule { }
