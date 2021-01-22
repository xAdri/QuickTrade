import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInmobiliaria, IMotor, IProducto, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';
//import { ListaProductosPage } from "../lista-productos/lista-productos.page"


@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  id: number;
  nombre: string;
  categoria: string;
  precio: string;
  descripcion: string;
  key: string;


  productos: (IProducto | ITecnologia | IInmobiliaria | IMotor) [];
  //productoxd: (IProducto | ITecnologia | IInmobiliaria | IMotor) [];

  constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductoService) { }

  ngOnInit() {
    //this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    //this.producto = this._productosService.getProducto(this.id);
    this.key = this._activatedRoute.snapshot.paramMap.get("key");

    let ref = this._productosService.getProductos();

    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.productos.push(value);
        console.log("he encontrado " + child.val().nombre)
      })
    })
  }

  /*
  ngOnInit() {
    //this.productos = this._productosService.getProductos();
    let ref = this._productosService.getMeGustas();
    ref.once("value", snapshot => {
      snapshot.forEach(child => {
        let value = child.val();
        this.megustas.push(value);
        console.log("he encontrado " + child.val().nombre_prod);
      })
    })
  }*/

  /*ngOnInit() {
    //this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    //this.producto = this._productosService.getProducto(this.id);
    this.key = this._activatedRoute.snapshot.paramMap.get("key");

    let ref = this._productosService.getProductos();

    ref.once("value", snapshot => {
      let p = snapshot.child(this.key);
      //crear un producto cogiendo los valores de p
      snapshot.forEach(child => {
        let value = child.val();
        //_listaProductosPage.productos.push(value);
        this._listaProductosPage.productos.push(value);
        console.log("he encontrado " + child.val().nombre);
      })
      console.log("he encontrado " + p.val().nombre);


    })
  }*/

}
