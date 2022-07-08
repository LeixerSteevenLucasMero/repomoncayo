"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las validaciones
const index_1 = require("../validators/index");
// Importar las funciones del controlador alquiler
const controllers_1 = require("../controllers");
const { obtenerMascotas, obtenerMascota, crearMascota, actualizarMascota, eliminarMascota } = controllers_1.Mascota;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el alquiler
router.get('/', obtenerMascotas);
router.get('/:id', obtenerMascota);
router.post('/', index_1.validarMascota, crearMascota);
router.put('/:id', index_1.validarMascota, actualizarMascota);
router.delete('/:id', eliminarMascota);
//# sourceMappingURL=mascota.js.map