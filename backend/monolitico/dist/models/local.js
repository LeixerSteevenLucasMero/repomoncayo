"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para el contratista
const localSchema = new Schema({
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
}, {
    versionKey: false
});
// Exportar el modelo
const Local = mongoose_1.default.model('Local', localSchema);
exports.Local = Local;
//# sourceMappingURL=local.js.map