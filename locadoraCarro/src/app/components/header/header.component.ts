import { Component, ElementRef, Renderer2 } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    public clienteService: ClienteService
  ) {}

  toggleMenu() {
    const menu = this.el.nativeElement.querySelector('.menu');
    if (menu.classList.contains('open')) {
      this.renderer.removeClass(menu, 'open');
    } else {
      this.renderer.addClass(menu, 'open');
    }
  }

  logout() {
    this.clienteService.logoutCliente();
  }
}
