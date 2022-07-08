import { check } from 'express-validator';
import { Request, Response, NextFunction } from "express";

import { validarCampos } from '../middlewares/index';

const validarServicio = [
    // Validar el id de la veterinaria
    check('veterinaria')
        .exists()
        .isMongoId()
        .withMessage('El id de la veterinaria ingresado no es válido'),

    // Validar el nombre del servicio
    check('nombre')
        .exists()
        .isString()
        .isLength({max:30})
        .withMessage('El nombre debe contener un máximo de 30 caracteres'),
    
    // Validar la descripción del servicio
    check('descripcion')
        .exists()
        .isString()
        .isLength({max:255})
        .withMessage('La descripción debe contener un máximo de 255 caracteres'),

    // Validar el precio del servicio
    check('precio')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El precio ingresado no es numérico'),

    // Validar el estado del servicio
    check('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),

    // Usar el middleware
    (req:Request, res:Response, next:NextFunction) => {
        validarCampos(req, res, next)
    }
]

export { validarServicio }