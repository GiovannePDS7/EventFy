import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrincipalComponent } from "./principal/principal.component";
import { QuemSomosComponent } from "./quem-somos/quem-somos.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, PrincipalComponent, QuemSomosComponent]
})
export class AppComponent {
  title = 'EventFy';
}
