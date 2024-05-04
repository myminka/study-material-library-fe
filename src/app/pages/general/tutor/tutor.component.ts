import { Component, OnInit } from '@angular/core';
import { TutorService } from './tutor.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrl: './tutor.component.css'
})
export class TutorComponent implements OnInit {
  tutors: any;
  loaded: boolean;
  baseUrl: string = environment.application.baseUrl;
  constructor(
    private TutorService: TutorService){
    this.loaded = false; 
  }

  ngOnInit(): void {
    this.getTutors();
  }

  getTutors(): void{
    this.loaded = false;
    this.TutorService.getTutors(`${this.baseUrl}/user`)
    .subscribe(
      tutors => {
        this.tutors = tutors;
        this.loaded = true;
      }
    )
  }
}
