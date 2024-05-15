import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegistrationResponseDto } from '../../../services/interfaces/responses/registrationResponseDto';
import { UserForRegistrationDto } from '../../../services/interfaces/user/userForRegistrationDto';

@Injectable({
  providedIn: 'root'
})

export class SignupService {
  constructor(private http: HttpClient) { }

  public registerUser = (route: string, body: UserForRegistrationDto) => {
    return this.http.post<RegistrationResponseDto> (route, body);
  }
}
