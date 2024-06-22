import { Component, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements AfterViewInit {
  private toggleInterval!: any;
  private phrases = ['Adquira seu ingresso!', 'Divulgue seus eventos', 'Organize eventos'];
  private phraseIndex = 0;
  private charIndex = 0;
  private titleElement!: HTMLElement | null;
  private toggleElement!: HTMLElement | null;

  constructor(private router: Router, private location: Location) { }

  ngAfterViewInit() {
    this.titleElement = document.getElementById('title');
    this.toggleElement = document.getElementById('toggleElement');

    if (!this.titleElement || !this.toggleElement) {
      console.error('Elementos necessários não foram encontrados.');
      return;
    }

    this.addText();
  }


  private addText() {
    if (this.charIndex < this.phrases[this.phraseIndex].length) {
      this.toggleElement!.style.visibility = 'visible';
      this.titleElement!.innerHTML += this.phrases[this.phraseIndex][this.charIndex];
      this.charIndex++;
      setTimeout(() => this.addText(), 120);
    } else {
      this.toggleInterval = setInterval(() => this.toggle(), 500);
      setTimeout(() => {
        clearInterval(this.toggleInterval);
        this.removeText();
      }, 2300);
    }
  }

  private removeText() {
    if (this.charIndex > 0) {
      this.toggleElement!.style.visibility = 'visible';
      this.titleElement!.innerHTML = this.titleElement!.innerHTML.slice(0, -1);
      this.charIndex--;
      setTimeout(() => this.removeText(), 70);
    } else {
      this.phraseIndex = (this.phraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.addText(), 200);
    }
  }

  private toggle() {
    this.toggleElement!.style.visibility = this.toggleElement!.style.visibility === 'hidden' ? 'visible' : 'hidden';
  }


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
      const yOffset = -15 * window.innerHeight / 100;
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
