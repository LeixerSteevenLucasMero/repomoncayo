import { Request, Response } from "express";
import { Local } from "../models/index";
import { ILocal } from "../interfaces"

// Consultar los locales registrados
const obtenerLocales = async (req:Request, res:Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado:true };
    const [ total, locales ] : [ Number, ILocal[] ] = await Promise.all(
        [
            Local
                .countDocuments(query),
            Local
                .find(query)
                // Subconsulta para el atributo empleados
                .populate('empleados', {
                    // Elementos omitidos en la subconsulta
                    usuario: 0,
                    veterinaria: 0,
                    reservaciones: 0
                })
                // Subconsulta para el atributo servicios
                .populate('servicios', { veterinaria: 0 })
                // Subconsulta para el atributo reservaciones
                .populate('reservaciones', {
                    // Elementos extraidos en la subconsulta
                    _id: 1,
                    fecha: 1,
                    total: 1,
                    estado: 1
                })
                .skip(Number(desde))
                .limit(Number(limite))
        ]
    )
    res.json(
        {
            total,
            locales
        }
    )
}

// Consultar un local por su id
const obtenerLocal = async (req:Request, res:Response) => {
    const { id } = req.params;
    const local:ILocal|null =
    await Local
            .findById(id)
            // Subconsulta para el atributo empleados
            .populate('empleados', {
                // Elementos omitidos en la subconsulta
                usuario: 0,
                veterinaria: 0,
                reservaciones: 0
            })
            // Subconsulta para el atributo servicios
            .populate('servicios', { veterinaria: 0 })
            // Subconsulta para el atributo reservaciones
            .populate('reservaciones', {
                // Elementos extraidos en la subconsulta
                _id: 1,
                fecha: 1,
                total: 1,
                estado: 1
            })         
    res.json(local);
}

//  Registrar un local en la base de datos
const crearLocal = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const local = new Local(body);
    const nuevoLocal = await local.save();
    return res.status(201).json(nuevoLocal);
}

// Actualizar un local por su id
const actualizarLocal = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const localModificado = await Local.findByIdAndUpdate(id, body, {new:true});
    res.json(localModificado);
}

// Eliminar un local por su id
const eliminarLocal = async (req:Request, res:Response) => {
    const { id } = req.params;
    const localEliminado = await Local.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(localEliminado);
}

// Módulos a exportar
export {
    obtenerLocales,
    obtenerLocal,
    crearLocal,
    actualizarLocal,
    eliminarLocal
}