import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyMaterialRoutingModule } from './study-material-routing.module';
import { StudyMaterialComponent } from './study-material.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [StudyMaterialComponent],
  exports: [StudyMaterialComponent],
  imports: [
    CommonModule,
    StudyMaterialRoutingModule,
    FormsModule
  ],
  providers:[]
})
export class StudyMaterialModule { }
