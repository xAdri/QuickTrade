import { Component, OnInit } from '@angular/core';
import { IVentas } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-puntuacion',
  templateUrl: './puntuacion.page.html',
  styleUrls: ['./puntuacion.page.scss'],
})
export class PuntuacionPage implements OnInit {

  nombre : string;
  descripcion : string;
  categoria : string;
  precio : number;
  enviado : string;

  checkEnvio : string = "";
  puntuacion : number;

  productos: IVentas[] = []
  
  constructor(private _productoService: ProductoService) { }

  ngOnInit() {
  }

  puntuarProducto() {

    if (this.checkEnvio == "si") {

      let producto: IVentas = ({
        "nombre": this.nombre,
        "categoria": this.categoria,
        "precio": this.precio,
        "descripcion": this.descripcion,
        "enviado": this.checkEnvio
      });

      console.log(producto.nombre);
      this._productoService.setVentas(producto);
    }

    if (this.checkEnvio == "no") {

      let producto: IVentas = ({
        "nombre": this.nombre,
        "categoria": this.categoria,
        "precio": this.precio,
        "descripcion": this.descripcion,
        "enviado": this.checkEnvio
      });

      console.log(producto.nombre);
      this._productoService.setVentas(producto);
    }


    //this._productoService.setProducto(producto);

  }

}
