import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
    }
  )
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http:HttpClient) {
   }

  getSubjects(url: string): Observable<Object>{
    return this.http.get(url, httpOptions);
  }
}
