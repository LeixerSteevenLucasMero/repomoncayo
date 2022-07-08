import mongoose from 'mongoose';

import { IVeterinario } from './../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const veterinarioSchema: mongoose.Schema = new Schema<IVeterinario>(
    {
        usuario: {
            type: Schema.Types.ObjectId,
            require: true
        },
        veterinaria: {
            type: Schema.Types.ObjectId,
            ref: "Local",
            require: true
        },
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
        cedula: {        
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
        cargo:{
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
const Veterinario = mongoose.model<IVeterinario>('Veterinario', veterinarioSchema);

export { Veterinario }