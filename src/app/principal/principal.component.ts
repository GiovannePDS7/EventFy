import { Component, HostListener } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
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