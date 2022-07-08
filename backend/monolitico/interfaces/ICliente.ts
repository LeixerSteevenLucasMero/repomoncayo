import Schema from 'mongoose';

export interface ICliente {
    usuario: Schema.Types.ObjectId,
    mascotas: [Schema.Types.ObjectId],
    reservaciones:[Schema.Types.ObjectId],
    nombre: String,
    cedula: String,
    telefono: String,
    correo: String,
    estado: Boolean
}