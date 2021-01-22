export interface IProducto {
    "id": number,
    "nombre": string,
    "categoria": string,
    "precio": number,
    "descripcion": string
}

export interface ITecnologia extends IProducto{
    "estado": string
}

export interface IInmobiliaria extends IProducto{
    "metros": number,
    "habitaciones" : number,
    "banyos" : number,
    "localidad" : string
}

export interface IMotor extends IProducto{
    "vehiculo": string,
    "kilometros" : number,
    "anyo" : number
}

export interface IVentas {
    "nombre": string,
    "categoria": string,
    "precio": number,
    "descripcion": string,
    "enviado" : string
}
