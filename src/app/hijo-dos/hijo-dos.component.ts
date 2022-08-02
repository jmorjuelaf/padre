import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo-dos',
  templateUrl: './hijo-dos.component.html',
  styleUrls: ['./hijo-dos.component.css']
})
export class HijoDosComponent implements OnInit {

//Se declara un decorador @Output que es de tipo EventEmitter() en la clase ts del elemento origen
@Output() eventoComunicar = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
//Se crea un método que será llamado cuando se quiera realizar la comunicación. 
//Al querer pasar un string entre componentes, dicho método recibe como 
//parámetros el componente. Para poder asociar los datos a introducir en el EventEmitter 
//se utiliza un par clave – valor, donde la clave se asocia a un dato concreto. 
//El dato que se quiere pasar se asociará a la clave elemento, la cual será utilizada 
//cuando se quiera recuperar el dato
  realizarComunicacion(dato: string){
    this.eventoComunicar.emit({elemento: dato});
  }

}
