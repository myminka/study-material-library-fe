import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular home ';
  footerUrl = "https://instagram.com";
  footerLink = "bntu.by";

  constructor(
    @Inject(PLATFORM_ID) private platfortmId: object){
    }

  ngOnInit(): void{
    console.log("asd")
    if (isPlatformBrowser(this.platfortmId)){
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove("show");
          }
        }
      }
    }
  }
}
