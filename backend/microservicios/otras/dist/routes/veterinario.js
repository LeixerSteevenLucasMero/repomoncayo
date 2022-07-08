"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las validaciones
const index_1 = require("../validators/index");
// Importar las funciones del controlador alquiler
const controllers_1 = require("../controllers");
const { obtenerVeterinarios, obtenerVeterinario, crearVeterinario, actualizarVeterinario, eliminarVeterinario } = controllers_1.Veterinarios;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el alquiler
router.get('/', obtenerVeterinarios);
router.get('/:id', obtenerVeterinario);
router.post('/', index_1.validarVeterinario, crearVeterinario);
router.put('/:id', index_1.validarVeterinario, actualizarVeterinario);
router.delete('/:id', eliminarVeterinario);
//# sourceMappingURL=veterinario.js.map