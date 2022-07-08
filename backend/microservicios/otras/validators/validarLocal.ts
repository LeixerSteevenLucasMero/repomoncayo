import { check } from 'express-validator';
import { Request, Response, NextFunction } from "express";

import { validarCampos } from '../middlewares/index';

const validarLocal = [
    // Validar el nombre del local
    check('nombre')
        .exists()
        .isString()
        .isLength({min:5, max:100})
        .withMessage('El nombre debe contener un mínimo 5 y máximo de 100 caracteres'),

    // Validar la dirección del local
    check('direccion')
        .exists()
        .isString()
        .isLength({min:5, max:100})
        .withMessage('La dirección debe contener un mínimo 5 y máximo de 100 caracteres'),

    // Validar el teléfono del local
    check('telefono')
        .exists()
        .isString()
        .isLength({min:10, max:10})
        .withMessage('El número de teléfono debe tener un mínimo y máximo de 10 caracteres'),

    // Validar el correo del local
    check('correo')
        .exists()
        .isEmail()
        .withMessage('El formato del correo es inválido'),

    // Validar el estado del local
    check('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),

    // Usar el middleware
    (req:Request, res:Response, next:NextFunction) => {
        validarCampos(req, res, next)
    }
]

export { validarLocal }