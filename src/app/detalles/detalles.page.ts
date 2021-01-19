import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInmobiliaria, IMotor, IProducto, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';


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

  producto: (IProducto | ITecnologia | IInmobiliaria | IMotor);

  constructor(private _activatedRoute: ActivatedRoute, private _productosService: ProductoService) { }

  ngOnInit() {
    this.id = +this._activatedRoute.snapshot.paramMap.get('id');
    //this.producto = this._productosService.getProducto(this.id);
  }

}
