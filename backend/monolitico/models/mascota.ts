import mongoose from 'mongoose';

import { IMascota } from './../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const mascotaSchema: mongoose.Schema = new Schema<IMascota>(
    {
        dueño: {
            type: Schema.Types.ObjectId,
            ref: "Cliente",
            require: true
        },
        nombre: {
            type: String,
            require: true
        },
        raza: {
            type: String,
            require: true
        },
        peso: {
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
const Mascota = mongoose.model<IMascota>('Mascota', mascotaSchema);

export { Mascota }