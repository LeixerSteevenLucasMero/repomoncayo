import Schema from 'mongoose';

export interface ILocal {
    empleados: [Schema.Types.ObjectId],
    servicios:[Schema.Types.ObjectId],
    reservaciones:[Schema.Types.ObjectId],
    nombre: String,
    direccion: String,
    telefono: String,
    correo: String,
    estado: Boolean
}