import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router, private location: Location) {}

  scrollToQuemSomos(): void {
    const url = this.router.url.split('#')[0]; // Obtém a URL sem o fragmento
    const newUrl = url + '#quem-somos';

    if (this.router.url === newUrl) {
      this.scrollToElement('quem-somos');
    } else {
      this.router.navigate(['/quemsomos'], { fragment: 'quem-somos' });
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToElement('quem-somos');
      }
    });
  }

  scrollToIntegrantes(): void {
    const url = this.router.url.split('#')[0]; 
    const newUrl = url + '#';

    if (this.router.url === newUrl) {
      this.scrollToElement('integrantes');
    } else {
      this.router.navigate(['/integrantes'], { fragment: 'integrantes' });
    }

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.scrollToElement('integrantes');
      }
    });
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -80; // Ajuste conforme necessário
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
