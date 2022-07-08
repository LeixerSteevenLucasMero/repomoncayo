import Schema from 'mongoose';

export interface IVeterinario {
    usuario: Schema.Types.ObjectId,
    veterinaria: Schema.Types.ObjectId,
    reservaciones:[Schema.Types.ObjectId],
    nombre: String,
    cedula: String,
    telefono: String,
    correo: String,
    cargo: String,
    estado: Boolean
}