import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'
import { IInmobiliaria, IMotor, IProducto, ITecnologia } from '../interfaces';
import { ProductoService } from '../services/producto.service';


@Component({
  selector: 'app-insertar-producto',
  templateUrl: './insertar-producto.page.html',
  styleUrls: ['./insertar-producto.page.scss'],
})
export class InsertarProductoPage implements OnInit {
  tecnologia: string = "tecnologia";
  hogar: string = "hogar";
  inmobiliaria: string = "inmobiliaria";
  motor: string = "motor";
  nombre: string;
  precio: number;
  descripcion: string;
  categoria: string;
  estado: string;
  metros: number;
  habitaciones: number;
  banyos: number;
  localidad: string;
  vehiculo: string;
  kilometros: number;
  anyo: number;

  // Estado
  checkEstado: string;
  checkMotor: string;

  productos: (IProducto | ITecnologia | IInmobiliaria | IMotor)[] = [
    /*
    {
      "id": 1,
      "nombre": "Teclado",
      "categoria": "Tecnologia",
      "precio": 15.5,
      "descripcion": "Teclado QWERTY con puerto USB 3.0 y formato con letra castellana"
    },
    {
      "id": 2,
      "nombre": "Raton",
      "categoria": "Tecnologia",
      "precio": 10.5,
      "descripcion": "Raton de hasta 2.500 dpi con rueda mecanica y leds"
    }
    */
  ];

  mostrarOpcion: string = "";

  mostrarTecnologia: boolean = false;
  mostrarMotor: boolean = false;
  mostrarInmobiliaria: boolean = false;

  constructor(private _toastCtrl: ToastController, private _productoService: ProductoService) {

  }

  async presentToast() {
    const toast = await this._toastCtrl.create({
      message: "El producto se ha insertado correctamente",
      duration: 1000,
      position: 'bottom'
    });
    toast.present();
  }

  // El void Start de Unity
  ngOnInit() {
    //this.productos = this._productoService.getProductos();
  }

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

  insertarProducto() {

    if (this.mostrarOpcion == this.tecnologia) {
      this.estado = this.checkEstado;

      let producto: ITecnologia = ({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "categoria": this.mostrarOpcion,
        "precio": this.precio,
        "descripcion": this.descripcion,
        "estado": this.estado
      });

      console.log(producto.nombre);
      this._productoService.setProducto(producto);
    }

    if (this.mostrarOpcion == this.hogar) {

      let producto: IProducto = ({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "categoria": this.mostrarOpcion,
        "precio": this.precio,
        "descripcion": this.descripcion
      });

      console.log(producto.nombre);
      this._productoService.setProducto(producto);
    }

    if (this.mostrarOpcion == this.motor) {
      this.estado = this.checkEstado;

      let producto: IMotor = ({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "categoria": this.mostrarOpcion,
        "precio": this.precio,
        "descripcion": this.descripcion,
        "vehiculo": this.checkMotor,
        "anyo": this.anyo,
        "kilometros" : this.kilometros
      });

      console.log(producto.nombre);
      this._productoService.setProducto(producto);
    }

    if (this.mostrarOpcion == this.inmobiliaria) {
      this.estado = this.checkEstado;

      let producto: IInmobiliaria = ({
        "id": this.productos.length + 1,
        "nombre": this.nombre,
        "categoria": this.mostrarOpcion,
        "precio": this.precio,
        "descripcion": this.descripcion,
        "metros" : this.metros,
        "habitaciones": this.habitaciones,
        "banyos" : this.banyos,
        "localidad" : this.localidad
      });

      console.log(producto.nombre);
      this._productoService.setProducto(producto);
    }

    /*let producto: (IProducto | ITecnologia | IMotor | IInmobiliaria) = ({
      "id": this.productos.length + 1,
      "nombre": this.nombre,
      "categoria": this.mostrarOpcion,
      "precio": this.precio,
      "descripcion": this.descripcion,
      "estado": this.checkEstado,
      "metros": this.metros,
      "habitaciones": this.habitaciones,
      "banyos": this.banyos,
      "localidad": this.localidad,
      "vehiculo": this.vehiculo,
      "kilometros": this.kilometros
    });*/

    //this._productoService.setProducto(producto);

    this.presentToast();

  }
}
