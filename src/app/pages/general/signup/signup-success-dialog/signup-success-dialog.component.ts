import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-success-dialog',
  standalone: true,
  imports: [],
  templateUrl: './signup-success-dialog.component.html',
  styleUrl: './signup-success-dialog.component.css'
})
export class SignupSuccessDialogComponent {

  refDialoge: any;
  constructor(private router: Router){
  }
  
  goToHomePage() {
    this.router.navigate(['/home']);
    
  }
}
