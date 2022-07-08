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
exports.eliminarServicio = exports.actualizarServicio = exports.crearServicio = exports.obtenerServicio = exports.obtenerServicios = void 0;
const index_1 = require("../models/index");
// Consultar los servicios registrados
const obtenerServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, servicios] = yield Promise.all([
        index_1.Servicio
            .countDocuments(query),
        index_1.Servicio
            .find(query)
            // Subconsulta para el atributo veterinaria
            .populate('veterinaria', {
            // Campos omitidos en la subconsulta
            reservaciones: 0,
            empleados: 0,
            servicios: 0
        })
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        servicios
    });
});
exports.obtenerServicios = obtenerServicios;
// Consultar un servicio por su id
const obtenerServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicio = yield index_1.Servicio
        .findById(id)
        // Subconsulta para el atributo veterinaria
        .populate('veterinaria', {
        // Campos omitidos en la subconsulta
        reservaciones: 0,
        empleados: 0,
        servicios: 0
    });
    res.json(servicio);
});
exports.obtenerServicio = obtenerServicio;
// Registrar un servicio en la base de datos
const crearServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const servicio = new index_1.Servicio(body);
    const nuevoServicio = yield servicio.save();
    return res.status(201).json(nuevoServicio);
});
exports.crearServicio = crearServicio;
// Actualizar un servicio por su id
const actualizarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const servicioModificado = yield index_1.Servicio.findByIdAndUpdate(id, body, { new: true });
    res.json(servicioModificado);
});
exports.actualizarServicio = actualizarServicio;
// Eliminar un servicio por su id
const eliminarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const servicioEliminado = yield index_1.Servicio.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(servicioEliminado);
});
exports.eliminarServicio = eliminarServicio;
//# sourceMappingURL=servicio.js.map