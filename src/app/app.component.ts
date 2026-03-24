import { DOCUMENT } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import { ThemeService } from './service/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  constructor(@Inject(DOCUMENT) private document: Document) {}
  title = 'EvidenceBrandon';
  modoNoche = false;
  toggleModoNoche(): void {
      const boton = document.querySelector('.theme-toggle button');

    this.modoNoche = !this.modoNoche;
    this.updateModoNocheStyles();

    if (boton) {
      if (this.modoNoche) {
        boton.textContent = ' 🌞 ';
        // Puedes agregar lógica adicional para cambiar estilos, por ejemplo, cambiar clases CSS
      } else {
        boton.textContent = ' 🌙';
        // Puedes ajustar estilos adicionales aquí también si lo deseas
      }
    }
  }

  updateModoNocheStyles(): void {
    if (this.modoNoche) {
      this.document.body.classList.add('night-mode');
    } else {
      this.document.body.classList.remove('night-mode');
    }
  }



  ngOnInit(): void {
     // Agregar una clase adicional para iniciar la animación en el mensaje
     const messageElement = document.querySelector('.message');
     if (messageElement) {
       messageElement.classList.add('start-typing');
     }
 
     // Después de 3500 ms (duración de la animación en mensaje), iniciar la animación en el nombre
     setTimeout(() => {
       const nameElement = document.querySelector('.myName');
       if (nameElement) {
         nameElement.classList.add('start-typing');
       }
     }, 3500);
  }
}
