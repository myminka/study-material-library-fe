import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { UserForRegistrationDto } from '../../../services/interfaces/user/userForRegistrationDto';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { PasswordConfirmationValidatorService } from '../../../services/custom-validators/password-confirmation-validator-service';
import { RegistrationDtoResponse } from '../../../services/interfaces/user/registrationDtoResponse';
import { UserRegistrationErrorsListRu } from '../../../services/constants/registration-constants/userRegistrationErrorsRu';
import { MatDialog } from '@angular/material/dialog';
import { SignupSuccessDialogComponent } from './signup-success-dialog/signup-success-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  registerForm!: FormGroup;
  baseUrl: string = environment.application.baseUrl;
  signupResult: any;

  constructor(private authService: SignupService,
     private passwordValidator: PasswordConfirmationValidatorService,
     private dialog: MatDialog){  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirm: new FormControl('')
    });
    var passwordValidator = this.registerForm.get('password');
    if (passwordValidator !== null){
      this.registerForm.get('confirm')?.setValidators([Validators.required,
        this.passwordValidator.validateConfirmPassword(passwordValidator)
      ]);
    }
  }

  public validateControl = (controlName: string) => {
    return this.registerForm.get(controlName)!.invalid && this.registerForm.get(controlName)!.touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.get(controlName)!.hasError(errorName)
  }

  public hasServerError = () => {
    if (this.signupResult !== undefined){
      return this.signupResult.errors;
    }
  }

  public registerUser = (registerFormValue: any) => {
    console.log("start user registering");
    const formValues = { ...registerFormValue };
    const user: UserForRegistrationDto = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      email: formValues.email,
      password: formValues.password,
      confirmPassword: formValues.confirm
    };

    if (user.password === user.confirmPassword){
      this.authService.registerUser(`${this.baseUrl}/user`, user)
      .subscribe({
        next: (result: RegistrationDtoResponse) => {
          console.log("next");
          this.signupResult = result;
          console.log(result);
          const dialogRef = this.dialog.open(SignupSuccessDialogComponent);
        },
        error: (err: HttpErrorResponse) => {
          var ruErrors: string[] = err.error.errors.map((error: string) => UserRegistrationErrorsListRu[error]);
          err.error.errors = ruErrors;
          this.signupResult = err.error;
          console.log(err.error.errors);
        }
      });

      console.log(this.signupResult);
    }
    else{
      // добавть обработку случая, когда пароли не совпадают
      throw new Error("Метод не организован")
    }
  }
}
