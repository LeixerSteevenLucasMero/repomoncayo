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
exports.eliminarCliente = exports.actualizarCliente = exports.crearCliente = exports.obtenerCliente = exports.obtenerClientes = void 0;
const index_1 = require("../models/index");
// Consultar los clientes registrados
const obtenerClientes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, clientes] = yield Promise.all([
        index_1.Cliente
            .countDocuments(query),
        index_1.Cliente
            .find(query)
            // Subconsulta para el atributo mascotas
            .populate('mascotas', { dueño: 0 })
            // Subconsulta para el atributo reservaciones
            .populate('reservaciones', {
            // Elementos extraidos en la subconsulta
            fecha: 1,
            total: 1,
            estado: 1
        })
            .skip(Number(desde))
            .limit(Number(limite))
    ]);
    res.json({
        total,
        clientes
    });
});
exports.obtenerClientes = obtenerClientes;
// Consultar un cliente por su id
const obtenerCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const cliente = yield index_1.Cliente
        .findById(id)
        // Subconsulta para la atributo mascotas
        .populate('mascotas', { dueño: 0 })
        // Subconsulta para la atributo reservaciones
        .populate('reservaciones', {
        // Elementos extraidos en la subconsulta
        fecha: 1,
        total: 1,
        estado: 1
    });
    res.json(cliente);
});
exports.obtenerCliente = obtenerCliente;
//  Registrar un cliente en la base de datos
const crearCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = __rest(req.body, []);
    const cliente = new index_1.Cliente(body);
    const nuevoCliente = yield cliente.save();
    return res.status(201).json(nuevoCliente);
});
exports.crearCliente = crearCliente;
// Actualizar un cliente por su id
const actualizarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = __rest(req.body, []);
    const clienteModificado = yield index_1.Cliente.findByIdAndUpdate(id, body, { new: true });
    res.json(clienteModificado);
});
exports.actualizarCliente = actualizarCliente;
// Eliminar un cliente por su id
const eliminarCliente = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const clienteEliminado = yield index_1.Cliente.findByIdAndUpdate(id, { estado: false }, { new: true });
    res.json(clienteEliminado);
});
exports.eliminarCliente = eliminarCliente;
//# sourceMappingURL=cliente.js.map