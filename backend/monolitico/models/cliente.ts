import mongoose from 'mongoose';

import { ICliente } from './../interfaces/index';

const { Schema, Model } = mongoose;

// Esquema de Mongoose para el contratista
const clienteSchema: mongoose.Schema = new Schema<ICliente>(
    {
        usuario: {
            type: Schema.Types.ObjectId,
            require: true
        },
        mascotas: [
            {
                type: Schema.Types.ObjectId,
                ref: "Mascota",
                require: true
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
const Cliente = mongoose.model<ICliente>('Cliente', clienteSchema);

export { Cliente }