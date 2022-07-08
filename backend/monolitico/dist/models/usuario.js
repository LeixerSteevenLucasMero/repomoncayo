"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, Model } = mongoose_1.default;
// Esquema de Mongoose para el contratista
const usuarioSchema = new Schema({
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
}, {
    versionKey: false
});
// Exportar el modelo
const Usuario = mongoose_1.default.model('Usuario', usuarioSchema);
exports.Usuario = Usuario;
//# sourceMappingURL=usuario.js.map