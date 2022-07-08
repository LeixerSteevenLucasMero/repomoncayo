"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarVeterinario = void 0;
const express_validator_1 = require("express-validator");
const index_1 = require("../middlewares/index");
const validarVeterinario = [
    // Validar el id del usuario
    (0, express_validator_1.check)('usuario')
        .exists()
        .isMongoId()
        .withMessage('Id de usuario no válido'),
    // Validar el id de la veterinaria
    (0, express_validator_1.check)('veterinaria')
        .exists()
        .isMongoId()
        .withMessage('Id de la veterinaria ingresado no válido'),
    // Validar el nombre del veterinario
    (0, express_validator_1.check)('nombre')
        .exists()
        .isString()
        .isLength({ min: 3, max: 155 })
        .withMessage('El nombre debe contener un mínimo 3 y máximo de 155 caracteres'),
    // Validar la cédula del veterinario
    (0, express_validator_1.check)('cedula')
        .exists()
        .isString()
        .isLength({ min: 10, max: 10 })
        .withMessage('La cédula debe tener un mínimo y máximo de 10 caracteres'),
    // Validar el teléfono del veterinario
    (0, express_validator_1.check)('telefono')
        .exists()
        .isString()
        .isLength({ min: 10, max: 10 })
        .withMessage('El número de teléfono debe tener un mínimo y máximo de 10 caracteres'),
    // Validar el correo del veterinario
    (0, express_validator_1.check)('correo')
        .exists()
        .isEmail()
        .withMessage('El formato del correo es inválido'),
    // Validar el cargo del veterinario
    (0, express_validator_1.check)('cargo')
        .exists()
        .isString()
        .isLength({ max: 15 })
        .withMessage('El cargo debe contener un máximo de 15 caracteres'),
    // Validar el estado del veterinario
    (0, express_validator_1.check)('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),
    // Usar el middleware
    (req, res, next) => {
        (0, index_1.validarCampos)(req, res, next);
    }
];
exports.validarVeterinario = validarVeterinario;
//# sourceMappingURL=validarVeterinario.js.map