import { check } from 'express-validator';
import { Request, Response, NextFunction } from "express";

import { validarCampos } from '../middlewares/index';

const validarMascota = [
    // Validar el id del dueño de la mascota
    check('dueño')
        .exists()
        .isMongoId()
        .withMessage('El id del dueño ingresado no es válido'),

    // Validar la raza de la mascota
    check('raza')
        .exists()
        .isString()
        .isLength({min:3, max:30})
        .withMessage('La raza debe contener un mínimo 3 y máximo de 30 caracteres'),

    // Validar el nombre de la mascota
    check('nombre')
        .exists()
        .isString()
        .isLength({min:3, max:30})
        .withMessage('El nombre debe contener un mínimo 3 y máximo de 30 caracteres'),

    // Validar el peso de la mascota
    check('peso')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El peso ingresado no es numérico'),

    // Validar el estado de la mascota
    check('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),

    // Usar el middleware
    (req:Request, res:Response, next:NextFunction) => {
        validarCampos(req, res, next)
    }
]

export { validarMascota }