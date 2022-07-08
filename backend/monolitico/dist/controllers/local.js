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
exports.eliminarLocal = exports.actualizarLocal = exports.crearLocal = exports.obtenerLocal = exports.obtenerLocales = void 0;
const index_1 = require("../models/index");
// Consultar los locales registrados
const obtenerLocales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, locales] = yield Promise.all([
        index_1.Local
            .countDocuments(query),
        index_1.Local
            .find(query)
            // Subconsulta para el atributo empleados
            .populate('empleados', {
            // Elementos omitidos en la subconsulta
            usuario: 0,
            veterinaria: 0,
            reservaciones: 0
        })
            // Subconsulta para el atributo servicios
            .populate('servicios', { veterinaria: 0 })
            // Subconsulta para el atributo reservaciones
            .populate('reservaciones', {
            // Elementos extraidos en la subconsulta
            _id: 1,
            fecha: 1,
            total: 1,
            estado: 1
        })
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        locales
    });
});
exports.obtenerLocales = obtenerLocales;
// Consultar un local por su id
const obtenerLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const local = yield index_1.Local
        .findById(id)
        // Subconsulta para el atributo empleados
        .populate('empleados', {
        // Elementos omitidos en la subconsulta
        usuario: 0,
        veterinaria: 0,
        reservaciones: 0
    })
        // Subconsulta para el atributo servicios
        .populate('servicios', { veterinaria: 0 })
        // Subconsulta para el atributo reservaciones
        .populate('reservaciones', {
        // Elementos extraidos en la subconsulta
        _id: 1,
        fecha: 1,
        total: 1,
        estado: 1
    });
    res.json(local);
});
exports.obtenerLocal = obtenerLocal;
//  Registrar un local en la base de datos
const crearLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const local = new index_1.Local(body);
    const nuevoLocal = yield local.save();
    return res.status(201).json(nuevoLocal);
});
exports.crearLocal = crearLocal;
// Actualizar un local por su id
const actualizarLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const localModificado = yield index_1.Local.findByIdAndUpdate(id, body, { new: true });
    res.json(localModificado);
});
exports.actualizarLocal = actualizarLocal;
// Eliminar un local por su id
const eliminarLocal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const localEliminado = yield index_1.Local.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(localEliminado);
});
exports.eliminarLocal = eliminarLocal;
//# sourceMappingURL=local.js.map