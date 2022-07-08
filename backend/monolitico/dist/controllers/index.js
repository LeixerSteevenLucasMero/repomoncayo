"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinarios = exports.Usuario = exports.Servicio = exports.Reserva = exports.Mascota = exports.Local = exports.Cliente = void 0;
// Importar todos los controladores
const Cliente = __importStar(require("./cliente"));
exports.Cliente = Cliente;
const Local = __importStar(require("./local"));
exports.Local = Local;
const Mascota = __importStar(require("./mascota"));
exports.Mascota = Mascota;
const Reserva = __importStar(require("./reserva"));
exports.Reserva = Reserva;
const Servicio = __importStar(require("./servicio"));
exports.Servicio = Servicio;
const Usuario = __importStar(require("./usuario"));
exports.Usuario = Usuario;
const Veterinarios = __importStar(require("./veterinarios"));
exports.Veterinarios = Veterinarios;
//# sourceMappingURL=index.js.map