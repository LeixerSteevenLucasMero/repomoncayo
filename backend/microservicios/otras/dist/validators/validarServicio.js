"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarServicio = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarServicio = [
    // Validar el id de la veterinaria
    (0, express_validator_1.check)('veterinaria')
        .exists()
        .isMongoId()
        .withMessage('El id de la veterinaria ingresado no es válido'),
    // Validar el nombre del servicio
    (0, express_validator_1.check)('nombre')
        .exists()
        .isString()
        .isLength({ max: 30 })
        .withMessage('El nombre debe contener un máximo de 30 caracteres'),
    // Validar la descripción del servicio
    (0, express_validator_1.check)('descripcion')
        .exists()
        .isString()
        .isLength({ max: 255 })
        .withMessage('La descripción debe contener un máximo de 255 caracteres'),
    // Validar el precio del servicio
    (0, express_validator_1.check)('precio')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El precio ingresado no es numérico'),
    // Validar el estado del servicio
    (0, express_validator_1.check)('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),
    // Usar el middleware
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarServicio = validarServicio;
//# sourceMappingURL=validarServicio.js.map