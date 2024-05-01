import { Component, OnInit } from '@angular/core';
import { TutorService } from './tutor.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.css'
})
export class TutorComponent implements OnInit {
  tutors: any;
  loaded: boolean;
  constructor(
    private TutorService: TutorService){
    this.loaded = false; 
  }

  ngOnInit(): void {
    this.getTutors();
  }

  getTutors(): void{
    this.loaded = false;
    this.TutorService.getTutors('https://localhost:7133/api/user')
    .subscribe(
      tutors => {
        this.tutors = tutors;
        this.loaded = true;
      }
    )
  }
}
