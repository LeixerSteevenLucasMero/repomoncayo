import { Request, Response } from "express";
import { Servicio } from "../models/index";
import { IServicio } from "../interfaces"

// Consultar los servicios registrados
const obtenerServicios = async (req:Request, res:Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado:true };
    const [ total, servicios ] : [ Number, IServicio[] ] = await Promise.all(
        [
            Servicio
                .countDocuments(query),
            Servicio
                .find(query)
                // Subconsulta para el atributo veterinaria
                .populate('veterinaria', {
                    // Campos omitidos en la subconsulta
                    reservaciones: 0,
                    empleados: 0,
                    servicios: 0
                })
                .skip(Number(desde))
                .limit(Number(limite))
        ]
    )
    res.json(
        {
            total,
            servicios
        }
    )
}

// Consultar un servicio por su id
const obtenerServicio = async (req:Request, res:Response) => {
    const { id } = req.params;
    const servicio:IServicio|null =
    await Servicio
            .findById(id)
            // Subconsulta para el atributo veterinaria
            .populate('veterinaria', {
                // Campos omitidos en la subconsulta
                reservaciones: 0,
                empleados: 0,
                servicios: 0
            })
    res.json(servicio);
}

// Registrar un servicio en la base de datos
const crearServicio = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const servicio = new Servicio(body);
    const nuevoServicio = await servicio.save();
    return res.status(201).json(nuevoServicio);
}

// Actualizar un servicio por su id
const actualizarServicio = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const servicioModificado = await Servicio.findByIdAndUpdate(id, body, {new:true});
    res.json(servicioModificado);
}

// Eliminar un servicio por su id
const eliminarServicio = async (req:Request, res:Response) => {
    const { id } = req.params;
    const servicioEliminado = await Servicio.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(servicioEliminado);
}

// Módulos a exportar
export {
    obtenerServicios,
    obtenerServicio,
    crearServicio,
    actualizarServicio,
    eliminarServicio
}