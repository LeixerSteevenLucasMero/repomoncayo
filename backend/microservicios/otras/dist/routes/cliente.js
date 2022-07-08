"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las validaciones
const index_1 = require("../validators/index");
// Importar las funciones del controlador alquiler
const controllers_1 = require("../controllers");
const { obtenerClientes, obtenerCliente, crearCliente, actualizarCliente, eliminarCliente } = controllers_1.Cliente;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el alquiler
router.get('/', obtenerClientes);
router.get('/:id', obtenerCliente);
router.post('/', index_1.validarCliente, crearCliente);
router.put('/:id', index_1.validarCliente, actualizarCliente);
router.delete('/:id', eliminarCliente);
//# sourceMappingURL=cliente.js.map