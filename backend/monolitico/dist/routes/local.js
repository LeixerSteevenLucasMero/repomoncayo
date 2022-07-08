"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las validaciones
const index_1 = require("../validators/index");
// Importar las funciones del controlador alquiler
const controllers_1 = require("../controllers");
const { obtenerLocales, obtenerLocal, crearLocal, actualizarLocal, eliminarLocal } = controllers_1.Local;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el alquiler
router.get('/', obtenerLocales);
router.get('/:id', obtenerLocal);
router.post('/', index_1.validarLocal, crearLocal);
router.put('/:id', index_1.validarLocal, actualizarLocal);
router.delete('/:id', eliminarLocal);
//# sourceMappingURL=local.js.map