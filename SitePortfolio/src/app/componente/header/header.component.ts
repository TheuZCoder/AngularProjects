import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
   menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }
}
