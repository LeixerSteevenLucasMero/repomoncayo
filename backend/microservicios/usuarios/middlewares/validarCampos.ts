import { Request, Response, NextFunction } from "express";
import { validationResult } from 'express-validator';

const validarCampos = (req:Request, res:Response, next:NextFunction) => {
    try {
        // Validar la petición
        validationResult(req).throw()
        // Pasar al siguiente middleware
        return next()
    } catch (err:any|null) {
        // Retornar los errores
        res.status(403).send({
            errors: err.array()
        })
    }
}

// Exportar el middleware
export { validarCampos }