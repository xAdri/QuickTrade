import { Injectable } from "@angular/core";
import { IProducto, IInmobiliaria, ITecnologia, IMotor } from "../interfaces";

@Injectable()

export class ProductoService {

    productos: (IProducto | ITecnologia | IInmobiliaria | IMotor)[] = [
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
    ];

    getProductos(): (IProducto | ITecnologia | IInmobiliaria | IMotor)[] {
        return this.productos;
    }

    getProducto(id: number) : (IProducto | ITecnologia | IInmobiliaria | IMotor){
        return this.productos.find(x => x.id == id);
    }
}