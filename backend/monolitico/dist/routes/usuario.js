"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las validaciones
const index_1 = require("../validators/index");
// Importar las funciones del controlador alquiler
const controllers_1 = require("../controllers");
const { obtenerUsuarios, obtenerUsuario, crearUsuario, actualizarUsuario, eliminarUsuario, login } = controllers_1.Usuario;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el alquiler
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', index_1.validarUsuario, crearUsuario);
router.put('/:id', index_1.validarUsuario, actualizarUsuario);
router.delete('/:id', eliminarUsuario);
router.get('/:user/:pass', login);
//# sourceMappingURL=usuario.js.map