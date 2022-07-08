import Schema from 'mongoose';

export interface IServicio {
    veterinaria: Schema.Types.ObjectId,
    nombre: String,
    descripcion: String,
    precio: Number,
    estado: Boolean
}