"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarUsuario = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarUsuario = [
    // Validar el nombre del usuario
    (0, express_validator_1.check)('nombre')
        .trim()
        .exists()
        .isString()
        .isLength({ min: 5, max: 20 })
        .withMessage('El nombre debe tener un mínimo 5 y máximo de 20 caracteres'),
    // Validar la contraseña del usuario
    (0, express_validator_1.check)('contraseña')
        .trim()
        .exists()
        .isString()
        .isLength({ min: 6, max: 25 })
        .withMessage('La contraseña debe tener un mínimo 6 y máximo de 25 caracteres'),
    // Validar el tipo del usuario
    (0, express_validator_1.check)('tipo')
        .trim()
        .exists()
        .isString()
        .isLength({ min: 6, max: 11 })
        .withMessage('El tipo de usuario debe tener un mínimo 6 y máximo de 11 caracteres'),
    // Validar el estado del usuario
    (0, express_validator_1.check)('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),
    // Usar el middleware
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarUsuario = validarUsuario;
//# sourceMappingURL=validarUsuario.js.map