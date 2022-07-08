import Schema from 'mongoose';

export interface IMascota {
    dueño: Schema.Types.ObjectId,
    nombre: String,
    raza: String,
    peso: Number,
    estado: Boolean
}