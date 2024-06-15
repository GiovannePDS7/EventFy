import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-integrantes',
  templateUrl: './integrantes.component.html',
  styleUrls: ['./integrantes.component.css']
})
export class IntegrantesComponent implements AfterViewInit {
  @ViewChild('slider') slider!: ElementRef;

  members = [
    { name: 'João Eduardo', role: 'Front-end Developer', image: '../../assets/img/Integrantes/Joao.png', github: 'juedu006', linkGithub: 'https://github.com/juedu006' },
    { name: 'Henrique Lopes', role: 'Back-end Developer', image: '../../assets/img/Integrantes/Henrique.png', github: 'Henriqueluz21', linkGithub: 'https://github.com/Henriqueluz21' },
    { name: 'Anderson A.', role: 'DataBase Administrator', image: '../../assets/img/Integrantes/Anderson.png', github: 'Anderson-Armando', linkGithub: 'https://github.com/Anderson-Armando' },
    { name: 'Giovanne P.', role: 'Back-end Developer', image: '../../assets/img/Integrantes/Giovanne.png', github: 'GiovannePDS7', linkGithub: 'https://github.com/GiovannePDS7' },
    { name: 'Isabella Amaro', role: 'UI/UX Designer', image: '../../assets/img/Integrantes/Isabella.png', github: 'Isabellinhaa', linkGithub: 'https://github.com/Isabellinhaa' },
    { name: 'Pedro Soares', role: 'DataBase Administrator', image: '../../assets/img/Integrantes/Pedro.png', github: 'PedroSoares22', linkGithub: 'https://github.com/PedroSoares22' },
  ];

  ngAfterViewInit() {
    this.addDragFunctionality();
  }

  addDragFunctionality() {
    const slider = this.slider.nativeElement;
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    slider.addEventListener('mousedown', (e: MouseEvent) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
    });
  }
}
