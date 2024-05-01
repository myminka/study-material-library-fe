import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOntions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(private http:HttpClient) {}

  getTutors(url: string): Observable<Object>{
    return this.http.get(url, httpOntions);
  }
}
