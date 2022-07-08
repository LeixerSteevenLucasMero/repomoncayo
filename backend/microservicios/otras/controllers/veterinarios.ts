import { Request, Response } from "express";
import { Veterinario } from "../models/index";
import { IVeterinario } from "../interfaces"

// Consultar los veterinarios registrados
const obtenerVeterinarios = async (req:Request, res:Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado:true };
    const [ total, veterinarios ] : [ Number, IVeterinario[] ] = await Promise.all(
        [
            Veterinario
                .countDocuments(query),
            Veterinario
                .find(query)
                // Subconsulta para el atributo veterinaria
                .populate('veterinaria', {
                    // Campos omitidos en la subconsulta
                    reservaciones: 0,
                    empleados: 0,
                    servicios: 0
                })
                // Subconsulta para el atributo reservaciones
                .populate('reservaciones', {
                    // Campos extraidos en la subconsulta
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
            veterinarios
        }
    )
}

// Consultar un veterinario por su id
const obtenerVeterinario = async (req:Request, res:Response) => {
    const { id } = req.params;
    const veterinario:IVeterinario|null =
    await Veterinario
            .findById(id)
            .populate('veterinaria', {
                reservaciones: 0,
                empleados: 0,
                servicios: 0
            })
            .populate('reservaciones', {
                fecha: 1,
                total: 1,
                estado: 1
            })
    res.json(veterinario);
}

// Registrar un veterinario en la base de datos
const crearVeterinario = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const veterinario = new Veterinario(body);
    const nuevoVeterinario = await veterinario.save();
    return res.status(201).json(nuevoVeterinario);
}

// Actualizar un veterinario por su id
const actualizarVeterinario = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const veterinarioModificado = await Veterinario.findByIdAndUpdate(id, body, {new:true});
    res.json(veterinarioModificado);
}

// Eliminar un veterinario por su id
const eliminarVeterinario = async (req:Request, res:Response) => {
    const { id } = req.params;
    const veterinarioEliminado = await Veterinario.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(veterinarioEliminado);
}

// Módulos a exportar
export {
    obtenerVeterinarios,
    obtenerVeterinario,
    crearVeterinario,
    actualizarVeterinario,
    eliminarVeterinario
}