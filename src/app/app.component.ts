import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//En este caso se trata de una variable datoComunicar definida en el archivo .ts del padre 
//la cual recoge el contenido del input mediante la pulsación del botón
  datoComunicar: string='';
  datoComunicarPadre: string='';

  constructor() { }

  ngOnInit() {
  }
//En evento click del botón ejecuta el método de la clase que iguala la variable 
//datoComunicar al contenido del input, al mismo tiempo que la etiqueta <app-hijo> 
//tiene como atributo el @Input declarado igualándolo a la variable
  realizarComunicacion(dato: string) {
    this.datoComunicar = dato;
  }
//En el método creado en el punto anterior, se recuperarán todos los datos del evento
//emitido los valores asociados a cada uno de los datos
  realizaComunicacionHijo(event:any) {
    this.datoComunicarPadre = event.elemento;
  }

}
