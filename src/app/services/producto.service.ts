import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { IProducto, IInmobiliaria, ITecnologia, IMotor, IVentas } from "../interfaces";

@Injectable()

export class ProductoService {

    constructor(private _db: AngularFireDatabase) {

    }

    setProducto(producto: IProducto) {
        let ref = this._db.database.ref("productos");
        let res = ref.push(producto);
        // firebase.default.database.Reference en vez de 
        // firebase.database.Reference
    }

    getProductos(): firebase.default.database.Reference {
        let ref = this._db.database.ref("productos");
        return ref;
    }

    getVentas(): firebase.default.database.Reference {
        let ref = this._db.database.ref("Mis_ventas");
        return ref;
    }

    setVentas(producto: IVentas) {
        let ref = this._db.database.ref("Mis_envios");
        let res = ref.push(producto);
    }

    /*
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
    */
}