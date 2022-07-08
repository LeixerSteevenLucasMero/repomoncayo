import { Request, Response } from "express";
import { Cliente } from "../models/index";
import { ICliente } from "../interfaces"

// Consultar los clientes registrados
const obtenerClientes = async (req:Request, res:Response) => {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado:true };
    const [ total, clientes ] : [ Number, ICliente[] ] = await Promise.all(
        [
            Cliente
                .countDocuments(query),
            Cliente
                .find(query)
                // Subconsulta para el atributo mascotas
                .populate('mascotas', { dueño: 0 })
                // Subconsulta para el atributo reservaciones
                .populate('reservaciones', {
                    // Elementos extraidos en la subconsulta
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
            clientes
        }
    )
}

// Consultar un cliente por su id
const obtenerCliente = async (req:Request, res:Response) => {
    const { id } = req.params;
    const cliente:ICliente|null =
    await Cliente
            .findById(id)
            // Subconsulta para la atributo mascotas
            .populate('mascotas', { dueño: 0 })
            // Subconsulta para la atributo reservaciones
            .populate('reservaciones', {
                // Elementos extraidos en la subconsulta
                fecha: 1,
                total: 1,
                estado: 1
            })
    res.json(cliente);
}

//  Registrar un cliente en la base de datos
const crearCliente = async (req:Request, res:Response) => {
    const { ...body } = req.body;
    const cliente = new Cliente(body);
    const nuevoCliente = await cliente.save();
    return res.status(201).json(nuevoCliente);
}

// Actualizar un cliente por su id
const actualizarCliente = async (req:Request, res:Response) => {
    const { id } = req.params;
    const { ...body } = req.body;
    const clienteModificado = await Cliente.findByIdAndUpdate(id, body, {new:true});
    res.json(clienteModificado);
}

// Eliminar un cliente por su id
const eliminarCliente = async (req:Request, res:Response) => {
    const { id } = req.params;
    const clienteEliminado = await Cliente.findByIdAndUpdate(id, {estado:false}, {new:true});
    res.json(clienteEliminado);
}

// Módulos a exportar
export {
    obtenerClientes,
    obtenerCliente,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}