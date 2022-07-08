import { check } from 'express-validator';
import { Request, Response, NextFunction } from "express";

import { validarCampos } from '../middlewares/index';

const validarReserva = [
    // Validar el id del dueño
    check('dueño')
        .exists()
        .isMongoId()
        .withMessage('El id del dueño ingresado no es válido'),
    
    // Validar el id de la mascota
    check('mascota')
        .exists()
        .isMongoId()
        .withMessage('El id de la mascota ingresado no es válido'),

    // Validar el id del veterinario
    check('veterinario')
        .exists()
        .isMongoId()
        .withMessage('El id del veterinario ingresado no es válido'),

    // Validar el id del local
    check('local')
        .exists()
        .isMongoId()
        .withMessage('El id del local ingresado no es válido'),

    // Validar la fecha de la reservación
    check('fecha')
        .exists()
        .isISO8601()
        .withMessage('Fecha de reservación no válida'),
    
    // Validar el total de la reservación
    check('total')
        .trim()
        .exists()
        .isNumeric()
        .withMessage('El total ingresado no es numérico'),

    // Validar el estado de la reservación
    check('estado')
        .exists()
        .isBoolean()
        .withMessage('Estado incorrecto, solo: true o false'),

    // Usar el middleware
    (req:Request, res:Response, next:NextFunction) => {
        validarCampos(req, res, next)
    }
]

export { validarReserva }