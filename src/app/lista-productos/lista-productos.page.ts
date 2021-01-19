import { Component, OnInit } from '@angular/core';
import { IInmobiliaria, IMotor, IProducto, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.page.html',
  styleUrls: ['./lista-productos.page.scss'],
})


export class ListaProductosPage implements OnInit {

  id: number;

  productos: (IProducto | ITecnologia | IInmobiliaria | IMotor)[] = [

  ];

  constructor(private _productosService: ProductoService) { }

  ngOnInit() {
    let ref = this._productosService.getProductos();

    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.productos.push(value);
        console.log("he encontrado "+child.val().nombre)
      })
    })
  }

}
