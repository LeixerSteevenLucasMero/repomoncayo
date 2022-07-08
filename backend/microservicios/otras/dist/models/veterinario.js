"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para el contratista
const veterinarioSchema = new Schema({
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
    cargo: {
        type: String,
        require: true
    },
    estado: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false
});
// Exportar el modelo
const Veterinario = mongoose_1.default.model('Veterinario', veterinarioSchema);
exports.Veterinario = Veterinario;
//# sourceMappingURL=veterinario.js.map