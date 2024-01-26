import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  title = 'EvidenceBrandon';

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
