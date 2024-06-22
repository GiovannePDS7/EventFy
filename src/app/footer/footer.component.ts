import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {
  private routerSubscription!: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const fragment = this.router.url.split('#')[1];
        if (fragment) {
          this.scrollToElement(fragment);
        }
      }
    });
  }

  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  scrollToQuemSomos(): void {
    this.navigateToSection('quem-somos', '/quemsomos');
  }

  scrollToIntegrantes(): void {
    this.navigateToSection('integrantes', '/integrantes');
  }

  private navigateToSection(fragment: string, route: string): void {
    const url = this.router.url.split('#')[0];
    const newUrl = `${url}#${fragment}`;

    if (this.router.url === newUrl) {
      this.scrollToElement(fragment);
    } else {
      this.router.navigate([route], { fragment });
    }
  }

  private scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset = -12 * window.innerHeight / 100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  
}
