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
exports.eliminarVeterinario = exports.actualizarVeterinario = exports.crearVeterinario = exports.obtenerVeterinario = exports.obtenerVeterinarios = void 0;
const index_1 = require("../models/index");
// Consultar los veterinarios registrados
const obtenerVeterinarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, veterinarios] = yield Promise.all([
        index_1.Veterinario
            .countDocuments(query),
        index_1.Veterinario
            .find(query)
            // Subconsulta para el atributo veterinaria
            .populate('veterinaria', {
            // Campos omitidos en la subconsulta
            reservaciones: 0,
            empleados: 0,
            servicios: 0
        })
            // Subconsulta para el atributo reservaciones
            .populate('reservaciones', {
            // Campos extraidos en la subconsulta
            fecha: 1,
            total: 1,
            estado: 1
        })
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        veterinarios
    });
});
exports.obtenerVeterinarios = obtenerVeterinarios;
// Consultar un veterinario por su id
const obtenerVeterinario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const veterinario = yield index_1.Veterinario
        .findById(id)
        .populate('veterinaria', {
        reservaciones: 0,
        empleados: 0,
        servicios: 0
    })
        .populate('reservaciones', {
        fecha: 1,
        total: 1,
        estado: 1
    });
    res.json(veterinario);
});
exports.obtenerVeterinario = obtenerVeterinario;
// Registrar un veterinario en la base de datos
const crearVeterinario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const veterinario = new index_1.Veterinario(body);
    const nuevoVeterinario = yield veterinario.save();
    return res.status(201).json(nuevoVeterinario);
});
exports.crearVeterinario = crearVeterinario;
// Actualizar un veterinario por su id
const actualizarVeterinario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const veterinarioModificado = yield index_1.Veterinario.findByIdAndUpdate(id, body, { new: true });
    res.json(veterinarioModificado);
});
exports.actualizarVeterinario = actualizarVeterinario;
// Eliminar un veterinario por su id
const eliminarVeterinario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const veterinarioEliminado = yield index_1.Veterinario.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(veterinarioEliminado);
});
exports.eliminarVeterinario = eliminarVeterinario;
//# sourceMappingURL=veterinarios.js.map