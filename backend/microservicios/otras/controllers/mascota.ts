import { Request, Response } from "express";
import { Mascota } from "../models/index";
import { IMascota } from "../interfaces"

// Consultar las mascotas registradas
const obtenerMascotas = async (req:Request, res:Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado:true };
    const [ total, mascotas ] : [ Number, IMascota[] ] = await Promise.all(
        [
            Mascota
                .countDocuments(query),
            Mascota
                .find(query)
                // Subconsulta para el atributo dueño
                .populate('dueño', {
                    // Elementos omitidos en la subconsulta
                    usuario: 0,
                    mascotas: 0,
                    reservaciones: 0
                })
                .skip(Number(desde))
                .limit(Number(limite))
        ]
    )
    res.json(
        {
            total,
            mascotas
        }
    )
}

// Consultar una mascota por su id
const obtenerMascota = async (req:Request, res:Response) => {
    const { id } = req.params;
    const mascota:IMascota|null =
    await Mascota
            .findById(id)
            // Subconsulta para el atributo dueño
            .populate('dueño', {
                // Elementos omitidos en la subconsulta
                usuario: 0,
                mascotas: 0,
                reservaciones: 0
            })
    res.json(mascota);
}

// Registrar una mascota en la base de datos
const crearMascota = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const mascota = new Mascota(body);
    const nuevaMascota = await mascota.save();
    return res.status(201).json(nuevaMascota);
}

// Actualizar una mascota por su id
const actualizarMascota = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const mascotaModificada = await Mascota.findByIdAndUpdate(id, body, {new:true});
    res.json(mascotaModificada);
}

// Eliminar una mascota por su id
const eliminarMascota = async (req:Request, res:Response) => {
    const { id } = req.params;
    const mascotaEliminada = await Mascota.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(mascotaEliminada);
}

// Módulos a exportar
export {
    obtenerMascotas,
    obtenerMascota,
    crearMascota,
    actualizarMascota,
    eliminarMascota
}