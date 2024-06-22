import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router, private location: Location) { }

  scrollTo(elementId: string): void {
    const url = this.router.url.split('#')[0];
    const newUrl = url + '#' + elementId;

    if (this.router.url === newUrl) {
      this.performScroll(elementId);
    } else {
      this.router.navigate([this.getCurrentRoute()], { fragment: elementId });
    }

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.performScroll(elementId);
      this.location.replaceState(this.getCurrentRouteWithoutFragment());
    });
  }

  private performScroll(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      const yOffset =  -12 * window.innerHeight / 100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  private getCurrentRoute(): string {
    return this.router.url.split('#')[0];
  }

  private getCurrentRouteWithoutFragment(): string {
    return this.router.url.split('#')[0];
  }
}
