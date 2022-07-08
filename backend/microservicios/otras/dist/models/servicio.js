"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Servicio = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para el contratista
const servicioSchema = new Schema({
    veterinaria: {
        type: Schema.Types.ObjectId,
        ref: "Local",
        require: true
    },
    nombre: {
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
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
const Servicio = mongoose_1.default.model('Servicio', servicioSchema);
exports.Servicio = Servicio;
//# sourceMappingURL=servicio.js.map