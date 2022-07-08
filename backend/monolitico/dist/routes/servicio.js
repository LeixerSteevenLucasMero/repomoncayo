"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las validaciones
const index_1 = require("../validators/index");
// Importar las funciones del controlador alquiler
const controllers_1 = require("../controllers");
const { obtenerServicios, obtenerServicio, crearServicio, actualizarServicio, eliminarServicio } = controllers_1.Servicio;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el alquiler
router.get('/', obtenerServicios);
router.get('/:id', obtenerServicio);
router.post('/', index_1.validarServicio, crearServicio);
router.put('/:id', index_1.validarServicio, actualizarServicio);
router.delete('/:id', eliminarServicio);
//# sourceMappingURL=servicio.js.map