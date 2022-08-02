import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
//Declarar un decorador @Input en el componente hijo. 
//Este decorador servirá como el nexo de unión entre los dos componentes. 
//Se asigna a una variable llamada componenteComunicar, la cual podrá ser 
//utilizada en el html del componente hijo
  @Input() componenteComunicar: string='';

  constructor() { }

  ngOnInit() {
  }

}