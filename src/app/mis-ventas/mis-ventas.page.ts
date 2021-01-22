import { Component, OnInit } from '@angular/core';
import { IVentas } from '../interfaces';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-mis-ventas',
  templateUrl: './mis-ventas.page.html',
  styleUrls: ['./mis-ventas.page.scss'],
})
export class MisVentasPage implements OnInit {

  nombre: string;
  descripcion: string;
  categoria: string;
  precio: number;
  enviado: string;

  puntuacion: number;

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

  // Esto es lo que deberia estar en la pagina para insertarlo no en la de puntuar
  puntuarProducto() {

    let producto: IVentas = ({
      "nombre": this.nombre,
      "categoria": this.categoria,
      "precio": this.precio,
      "descripcion": this.descripcion,
      "enviado": this.enviado
    });

    console.log(producto.nombre);
    //this._productoService.setVentas(producto);
    }



  }
