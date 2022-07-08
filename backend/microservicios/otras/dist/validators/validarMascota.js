"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarMascota = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarMascota = [
    // Validar el id del dueño de la mascota
    (0, express_validator_1.check)('dueño')
        .exists()
        .isMongoId()
        .withMessage('El id del dueño ingresado no es válido'),
    // Validar la raza de la mascota
    (0, express_validator_1.check)('raza')
        .exists()
        .isString()
        .isLength({ min: 3, max: 30 })
        .withMessage('La raza debe contener un mínimo 3 y máximo de 30 caracteres'),
    // Validar el nombre de la mascota
    (0, express_validator_1.check)('nombre')
        .exists()
        .isString()
        .isLength({ min: 3, max: 30 })
        .withMessage('El nombre debe contener un mínimo 3 y máximo de 30 caracteres'),
    // Validar el peso de la mascota
    (0, express_validator_1.check)('peso')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El peso ingresado no es numérico'),
    // Validar el estado de la mascota
    (0, express_validator_1.check)('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),
    // Usar el middleware
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarMascota = validarMascota;
//# sourceMappingURL=validarMascota.js.map