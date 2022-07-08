"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarReserva = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarReserva = [
    // Validar el id del dueño
    (0, express_validator_1.check)('dueño')
        .exists()
        .isMongoId()
        .withMessage('El id del dueño ingresado no es válido'),
    // Validar el id de la mascota
    (0, express_validator_1.check)('mascota')
        .exists()
        .isMongoId()
        .withMessage('El id de la mascota ingresado no es válido'),
    // Validar el id del veterinario
    (0, express_validator_1.check)('veterinario')
        .exists()
        .isMongoId()
        .withMessage('El id del veterinario ingresado no es válido'),
    // Validar el id del local
    (0, express_validator_1.check)('local')
        .exists()
        .isMongoId()
        .withMessage('El id del local ingresado no es válido'),
    // Validar la fecha de la reservación
    (0, express_validator_1.check)('fecha')
        .exists()
        .isISO8601()
        .withMessage('Fecha de reservación no válida'),
    // Validar el total de la reservación
    (0, express_validator_1.check)('total')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El total ingresado no es numérico'),
    // Validar el estado de la reservación
    (0, express_validator_1.check)('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),
    // Usar el middleware
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarReserva = validarReserva;
//# sourceMappingURL=validarReserva.js.map