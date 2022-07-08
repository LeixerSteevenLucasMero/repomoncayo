import Schema from 'mongoose';

export interface IReserva {
    dueño: Schema.Types.ObjectId,
    mascota: Schema.Types.ObjectId,
    servicios: [Schema.Types.ObjectId],
    veterinario: Schema.Types.ObjectId,
    local: Schema.Types.ObjectId,
    fecha: Date,
    total: Number,
    estado: Boolean
}