import mongoose from 'mongoose';

import { IUsuario } from './../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const usuarioSchema: mongoose.Schema = new Schema<IUsuario>(
    {
        nombre: {
            type: String,
            require: true
        },
        contraseña: {        
            type: String,
            require: true      
        },
        tipo: {
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
const Usuario = mongoose.model<IUsuario>('Usuario', usuarioSchema);

export { Usuario }
