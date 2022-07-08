"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reserva = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para el contratista
const reservacionSchema = new Schema({
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
}, {
    versionKey: false
});
// Exportar el modelo
const Reserva = mongoose_1.default.model('Reserva', reservacionSchema);
exports.Reserva = Reserva;
//# sourceMappingURL=reserva.js.map