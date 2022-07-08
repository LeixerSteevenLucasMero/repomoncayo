import { Request, Response } from "express";
import { Reserva } from "../models/index";
import { IReserva } from "../interfaces"

// Consultar las reservaciones registradas
const obtenerReservaciones = async (req:Request, res:Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado:true };
    const [ total, reservaciones ] : [ Number, IReserva[] ] = await Promise.all(
        [
            Reserva
                .countDocuments(query),
            Reserva
                .find(query)
                // Subconsulta para el atributo dueño
                .populate('dueño', {
                    // Elementos omitidos en la subconsulta
                    usuario: 0,
                    mascotas: 0,
                    reservaciones: 0
                })
                // Subconsulta para el atributo mascota
                .populate('mascota', { dueño: 0 })
                // Subconsulta para el atributo servicios
                .populate('servicios', { veterinaria: 0 })
                // Subconsulta para el atributo veterinario
                .populate('veterinario', {
                    // Elementos omitidos en la subconsulta
                    usuario: 0,
                    veterinaria: 0,
                    reservaciones: 0
                })
                // Subconsulta para el atributo local
                .populate('local', {
                    // Elementos omitidos en la subconsulta
                    empleados: 0,
                    servicios: 0,
                    reservaciones: 0
                })
                .skip(Number(desde))
                .limit(Number(limite))
        ]
    )
    res.json(
        {
            total,
            reservaciones
        }
    )
}

// Consultar una reservación por su id
const obtenerReservacion = async (req:Request, res:Response) => {
    const { id } = req.params;
    const reservacion:IReserva|null =
    await Reserva
            .findById(id)
            // Subconsulta para el atributo dueño
            .populate('dueño', {
                // Elementos omitidos en la subconsulta
                usuario: 0,
                mascotas: 0,
                reservaciones: 0
            })
            // Subconsulta para el atributo mascota
            .populate('mascota', { dueño: 0 })
            // Subconsulta para el atributo servicios
            .populate('servicios', { veterinaria: 0 })
            // Subconsulta para el atributo veterinario
            .populate('veterinario', {
                // Elementos omitidos en la subconsulta
                usuario: 0,
                veterinaria: 0,
                reservaciones: 0
            })
            // Subconsulta para el atributo local
            .populate('local', {
                // Elementos omitidos en la subconsulta
                empleados: 0,
                servicios: 0,
                reservaciones: 0
            })
    res.json(reservacion);
}

// Registrar una reservación en la base de datos
const crearReservacion = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const reservacion = new Reserva(body);
    const nuevaReservacion = await reservacion.save();
    return res.status(201).json(nuevaReservacion);
}

// Actualizar una reservación por su id
const actualizarReservacion = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const reservacionModificada = await Reserva.findByIdAndUpdate(id, body, {new:true});
    res.json(reservacionModificada);
}

// Eliminar una reservación por su id
const eliminarReservacion = async (req:Request, res:Response) => {
    const { id } = req.params;
    const reservacionEliminada = await Reserva.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(reservacionEliminada);
}

// Módulos a exportar
export {
    obtenerReservaciones,
    obtenerReservacion,
    crearReservacion,
    actualizarReservacion,
    eliminarReservacion
}