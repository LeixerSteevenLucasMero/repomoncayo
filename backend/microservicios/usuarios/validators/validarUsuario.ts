import { check } from 'express-validator';
import { Request, Response, NextFunction } from "express";

import { validarCampos } from '../middlewares/index';

const validarUsuario = [
    // Validar el nombre del usuario
    check('nombre')
        .trim()
        .exists()
        .isString()
        .isLength({min:5, max:20})
        .withMessage('El nombre debe tener un mínimo 5 y máximo de 20 caracteres'),

    // Validar la contraseña del usuario
    check('contraseña')
        .trim()
        .exists()
        .isString()
        .isLength({min:6, max:25})
        .withMessage('La contraseña debe tener un mínimo 6 y máximo de 25 caracteres'),

    // Validar el tipo del usuario
    check('tipo')
        .trim()
        .exists()
        .isString()
        .isLength({min:6, max:11})
        .withMessage('El tipo de usuario debe tener un mínimo 6 y máximo de 11 caracteres'),

    // Validar el estado del usuario
    check('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),

    // Usar el middleware
    (req:Request, res:Response, next:NextFunction) => {
        validarCampos(req, res, next)
    }
]

export { validarUsuario }