import { Component, OnInit } from '@angular/core';
import { IVentas } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {

  puntuacion : number;

  productos: (IVentas)[] = [

  ];

  constructor(private _productosService: ProductoService) { }

  ngOnInit() {
    let ref = this._productosService.getVentas();

    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.productos.push(value);
        console.log("he encontrado " + child.val().nombre)
      })
    })
  }

}
