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
exports.eliminarReservacion = exports.actualizarReservacion = exports.crearReservacion = exports.obtenerReservacion = exports.obtenerReservaciones = void 0;
const index_1 = require("../models/index");
// Consultar las reservaciones registradas
const obtenerReservaciones = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, reservaciones] = yield Promise.all([
        index_1.Reserva
            .countDocuments(query),
        index_1.Reserva
            .find(query)
            // Subconsulta para el atributo dueño
            .populate('dueño', {
            // Elementos omitidos en la subconsulta
            usuario: 0,
            mascotas: 0,
            reservaciones: 0
        })
            // Subconsulta para el atributo mascota
            .populate('mascota', { dueño: 0 })
            // Subconsulta para el atributo servicios
            .populate('servicios', { veterinaria: 0 })
            // Subconsulta para el atributo veterinario
            .populate('veterinario', {
            // Elementos omitidos en la subconsulta
            usuario: 0,
            veterinaria: 0,
            reservaciones: 0
        })
            // Subconsulta para el atributo local
            .populate('local', {
            // Elementos omitidos en la subconsulta
            empleados: 0,
            servicios: 0,
            reservaciones: 0
        })
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        reservaciones
    });
});
exports.obtenerReservaciones = obtenerReservaciones;
// Consultar una reservación por su id
const obtenerReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const reservacion = yield index_1.Reserva
        .findById(id)
        // Subconsulta para el atributo dueño
        .populate('dueño', {
        // Elementos omitidos en la subconsulta
        usuario: 0,
        mascotas: 0,
        reservaciones: 0
    })
        // Subconsulta para el atributo mascota
        .populate('mascota', { dueño: 0 })
        // Subconsulta para el atributo servicios
        .populate('servicios', { veterinaria: 0 })
        // Subconsulta para el atributo veterinario
        .populate('veterinario', {
        // Elementos omitidos en la subconsulta
        usuario: 0,
        veterinaria: 0,
        reservaciones: 0
    })
        // Subconsulta para el atributo local
        .populate('local', {
        // Elementos omitidos en la subconsulta
        empleados: 0,
        servicios: 0,
        reservaciones: 0
    });
    res.json(reservacion);
});
exports.obtenerReservacion = obtenerReservacion;
// Registrar una reservación en la base de datos
const crearReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const reservacion = new index_1.Reserva(body);
    const nuevaReservacion = yield reservacion.save();
    return res.status(201).json(nuevaReservacion);
});
exports.crearReservacion = crearReservacion;
// Actualizar una reservación por su id
const actualizarReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const reservacionModificada = yield index_1.Reserva.findByIdAndUpdate(id, body, { new: true });
    res.json(reservacionModificada);
});
exports.actualizarReservacion = actualizarReservacion;
// Eliminar una reservación por su id
const eliminarReservacion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const reservacionEliminada = yield index_1.Reserva.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(reservacionEliminada);
});
exports.eliminarReservacion = eliminarReservacion;
//# sourceMappingURL=reserva.js.map