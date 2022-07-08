import { check } from 'express-validator';
import { Request, Response, NextFunction } from "express";

import { validarCampos } from '../middlewares/index';

const validarCliente = [
    // Validar el id del usuario
    check('usuario')
        .exists()
        .isMongoId()
        .withMessage('Id de usuario no válido'),

    // Validar el nombre del cliente
    check('nombre')
        .exists()
        .isString()
        .isLength({min:3, max:155})
        .withMessage('El nombre debe contener un mínimo 3 y máximo de 155 caracteres'),

    // Validar la cédula del cliente
    check('cedula')
        .exists()
        .isString()
        .isLength({min:10, max:10})
        .withMessage('La cédula debe tener un mínimo y máximo de 10 caracteres'),

    // Validar el teléfono del cliente
    check('telefono')
        .exists()
        .isString()
        .isLength({min:10, max:10})
        .withMessage('El número de teléfono debe tener un mínimo y máximo de 10 caracteres'),

    // Validar el correo del cliente
    check('correo')
        .exists()
        .isEmail()
        .withMessage('El formato del correo es inválido'),

    // Validar el estado del cliente
    check('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),
        
    // Usar el middleware
    (req:Request, res:Response, next:NextFunction) => {
        validarCampos(req, res, next)
    }
]

export { validarCliente }