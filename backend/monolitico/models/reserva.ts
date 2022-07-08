import mongoose from 'mongoose';

import { IReserva } from '../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const reservacionSchema: mongoose.Schema = new Schema<IReserva>(
    {
        dueño: {
            type: Schema.Types.ObjectId,
            ref: "Cliente",
            require: true
        },
        mascota: {
            type: Schema.Types.ObjectId,
            ref: "Mascota",
            require: true
        },
        servicios: [
            {
                type: Schema.Types.ObjectId,
                ref: "Servicio",
                require: true
            }
        ],
        veterinario: {
            type: Schema.Types.ObjectId,
            ref: "Veterinario",
            require: true
        },
        local: {
            type: Schema.Types.ObjectId,
            ref: "Local",
            require: true
        },
        fecha: {
            type: Date,
            require: true
        },
        total: {
            type: Number,
            require: true
        },
        estado: {
            type: Boolean,
            default: true
        }
    },
    { 
        versionKey: false
    }
)

// Exportar el modelo
const Reserva = mongoose.model<IReserva>('Reserva', reservacionSchema);

export { Reserva }