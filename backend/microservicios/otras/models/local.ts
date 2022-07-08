import mongoose from 'mongoose';

import { ILocal } from './../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const localSchema: mongoose.Schema = new Schema<ILocal>(
    {
        empleados: [
            {
                type: Schema.Types.ObjectId,
                ref: "Veterinario"
            }
        ],
        servicios: [
            {
                type: Schema.Types.ObjectId,
                ref: "Servicio"
            }
        ],
        reservaciones: [
            {
                type: Schema.Types.ObjectId,
                ref: "Reserva"
            }
        ],
        nombre: {
            type: String,
            require: true
        },
        direccion: {        
            type: String,
            require: true      
        },
        telefono: {
            type: String,
            require: true
        },
		correo: {
			type: String,
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
const Local = mongoose.model<ILocal>('Local', localSchema);

export { Local }