import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  NavHeader = document.getElementById('NavHeader');

  isHeaderScrolled: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.isHeaderScrolled = window.scrollY > 0;
    if(this.NavHeader){
      if(window.scrollY == 0){
        this.NavHeader.classList.add('text-top');
      }else{
        this.NavHeader.classList.add('text-scrolled');
      }
    }
  }
}
