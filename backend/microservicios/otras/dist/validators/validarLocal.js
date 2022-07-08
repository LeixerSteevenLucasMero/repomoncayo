"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarLocal = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarLocal = [
    // Validar el nombre del local
    (0, express_validator_1.check)('nombre')
        .exists()
        .isString()
        .isLength({ min: 5, max: 100 })
        .withMessage('El nombre debe contener un mínimo 5 y máximo de 100 caracteres'),
    // Validar la dirección del local
    (0, express_validator_1.check)('direccion')
        .exists()
        .isString()
        .isLength({ min: 5, max: 100 })
        .withMessage('La dirección debe contener un mínimo 5 y máximo de 100 caracteres'),
    // Validar el teléfono del local
    (0, express_validator_1.check)('telefono')
        .exists()
        .isString()
        .isLength({ min: 10, max: 10 })
        .withMessage('El número de teléfono debe tener un mínimo y máximo de 10 caracteres'),
    // Validar el correo del local
    (0, express_validator_1.check)('correo')
        .exists()
        .isEmail()
        .withMessage('El formato del correo es inválido'),
    // Validar el estado del local
    (0, express_validator_1.check)('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),
    // Usar el middleware
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarLocal = validarLocal;
//# sourceMappingURL=validarLocal.js.map