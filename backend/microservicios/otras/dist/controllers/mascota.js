"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarMascota = exports.actualizarMascota = exports.crearMascota = exports.obtenerMascota = exports.obtenerMascotas = void 0;
const index_1 = require("../models/index");
// Consultar las mascotas registradas
const obtenerMascotas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, mascotas] = yield Promise.all([
        index_1.Mascota
            .countDocuments(query),
        index_1.Mascota
            .find(query)
            // Subconsulta para el atributo dueño
            .populate('dueño', {
            // Elementos omitidos en la subconsulta
            usuario: 0,
            mascotas: 0,
            reservaciones: 0
        })
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        mascotas
    });
});
exports.obtenerMascotas = obtenerMascotas;
// Consultar una mascota por su id
const obtenerMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const mascota = yield index_1.Mascota
        .findById(id)
        // Subconsulta para el atributo dueño
        .populate('dueño', {
        // Elementos omitidos en la subconsulta
        usuario: 0,
        mascotas: 0,
        reservaciones: 0
    });
    res.json(mascota);
});
exports.obtenerMascota = obtenerMascota;
// Registrar una mascota en la base de datos
const crearMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const mascota = new index_1.Mascota(body);
    const nuevaMascota = yield mascota.save();
    return res.status(201).json(nuevaMascota);
});
exports.crearMascota = crearMascota;
// Actualizar una mascota por su id
const actualizarMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const mascotaModificada = yield index_1.Mascota.findByIdAndUpdate(id, body, { new: true });
    res.json(mascotaModificada);
});
exports.actualizarMascota = actualizarMascota;
// Eliminar una mascota por su id
const eliminarMascota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const mascotaEliminada = yield index_1.Mascota.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(mascotaEliminada);
});
exports.eliminarMascota = eliminarMascota;
//# sourceMappingURL=mascota.js.map