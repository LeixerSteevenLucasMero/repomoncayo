"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mascota = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para el contratista
const mascotaSchema = new Schema({
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
}, {
    versionKey: false
});
// Exportar el modelo
const Mascota = mongoose_1.default.model('Mascota', mascotaSchema);
exports.Mascota = Mascota;
//# sourceMappingURL=mascota.js.map