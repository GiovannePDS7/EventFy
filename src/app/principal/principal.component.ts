import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  ngAfterViewInit() {
    const title = document.getElementById('title');
    const phrases = ['Adquira seu ingresso!', 'Divulgue seus eventos', 'Organize eventos'];
    let phraseIndex = 0;
    let charIndex = 0;
    const toggleElement = document.getElementById("toggleElement");


    if (!title) {
      console.error('Elemento com ID "title" não encontrado.');
      return;
    }

    function addText() {
      if (charIndex < phrases[phraseIndex].length) {
        toggleElement!.style.visibility = "visible";
        title!.innerHTML += phrases[phraseIndex][charIndex];
        charIndex++;
        setTimeout(addText, 120);
      } else {
        const toggleInterval = setInterval(toggle, 500);
        setTimeout(function () {
          clearInterval(toggleInterval);
        }, 2300);
        setTimeout(removeText, 2300); // Espera um tempo antes de começar a remover o texto
      }
    }

    function removeText() {
      if (charIndex > 0) {
        toggleElement!.style.visibility = "visible";
        title!.innerHTML = title!.innerHTML.slice(0, -1);
        charIndex--;
        setTimeout(removeText, 70);
      } else {
        phraseIndex = (phraseIndex + 1) % phrases.length;
        setTimeout(addText, 200);
      }
    }
    function toggle() {
      if (toggleElement!.style.visibility === "hidden" || toggleElement!.style.visibility === "") {
        toggleElement!.style.visibility = "visible";
      } else {
        toggleElement!.style.visibility = "hidden";
      }
    }

    addText();
  }
}