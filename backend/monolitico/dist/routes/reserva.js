"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
// Importar las validaciones
const index_1 = require("../validators/index");
// Importar las funciones del controlador alquiler
const controllers_1 = require("../controllers");
const { obtenerReservaciones, obtenerReservacion, crearReservacion, actualizarReservacion, eliminarReservacion } = controllers_1.Reserva;
const router = (0, express_1.Router)();
exports.router = router;
// Rutas para el alquiler
router.get('/', obtenerReservaciones);
router.get('/:id', obtenerReservacion);
router.post('/', index_1.validarReserva, crearReservacion);
router.put('/:id', index_1.validarReserva, actualizarReservacion);
router.delete('/:id', eliminarReservacion);
//# sourceMappingURL=reserva.js.map