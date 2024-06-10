import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramRoutingModule } from './program-routing.module';
import { ProgramComponent } from './program.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProgramComponent],
  exports: [ProgramComponent],
  imports: [
    CommonModule,
    ProgramRoutingModule,
    FormsModule
  ],
  providers: []
})
export class ProgramModule { }
