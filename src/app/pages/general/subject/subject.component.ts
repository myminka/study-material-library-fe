import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  subjects: any;
  loaded: boolean;
  baseUrl: string = environment.application.baseUrl;
  constructor(
    private SubjectService: SubjectService){
    this.loaded = false
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.loaded = false;
    this.SubjectService.getSubjects(`${this.baseUrl}/subject`)
      .subscribe(
        subjects => {
          this.subjects = subjects;
          this.loaded = true;
        }
      )
  }

  resetSubjects(): void {
    this.subjects = null;
    this.loaded = true;
  }
}
