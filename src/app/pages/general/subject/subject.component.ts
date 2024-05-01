import { Component, OnInit } from '@angular/core';
import { SubjectService } from './subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent implements OnInit {

  subjects: any;
  loaded: boolean;
  constructor(
    private SubjectService: SubjectService){
    this.loaded = false
  }

  ngOnInit(): void {
    this.getSubjects();
  }

  getSubjects(): void {
    this.loaded = false;
    this.SubjectService.getSubjects('https://localhost:7133/api/subject')
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
