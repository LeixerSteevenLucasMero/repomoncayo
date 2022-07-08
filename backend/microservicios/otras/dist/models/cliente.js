"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para el contratista
const clienteSchema = new Schema({
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
}, {
    versionKey: false
});
// Exportar el modelo
const Cliente = mongoose_1.default.model('Cliente', clienteSchema);
exports.Cliente = Cliente;
//# sourceMappingURL=cliente.js.map