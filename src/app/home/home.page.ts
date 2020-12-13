import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tecnologia: string = "tecnologia";
  hogar: string = "hogar";
  inmobiliaria: string = "inmobiliaria";
  motor: string = "motor";

  mostrarOpcion: string = "";

  mostrarTecnologia: boolean = false;
  mostrarMotor: boolean = false;
  mostrarInmobiliaria: boolean = false;
  constructor() { }

  mostrarPanel(): void {

    if (this.mostrarOpcion == this.tecnologia) {
      this.mostrarTecnologia = true;
      this.mostrarMotor = false;
      this.mostrarInmobiliaria = false;
    }

    if (this.mostrarOpcion == this.hogar) {
      this.mostrarTecnologia = false;
      this.mostrarMotor = false;
      this.mostrarInmobiliaria = false;
    }

    if (this.mostrarOpcion == this.inmobiliaria) {
      this.mostrarInmobiliaria = true;
      this.mostrarTecnologia = false;
      this.mostrarMotor = false;
    }

    if (this.mostrarOpcion == this.motor) {
      this.mostrarMotor = true;
      this.mostrarTecnologia = false;
      this.mostrarInmobiliaria = false;
    }

  }

}
