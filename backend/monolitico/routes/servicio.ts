import { Router } from 'express';

// Importar las validaciones
import { validarServicio } from '../validators/index';

// Importar las funciones del controlador alquiler
import { Servicio } from '../controllers';
const {
    obtenerServicios,
    obtenerServicio,
    crearServicio,
    actualizarServicio,
    eliminarServicio
} = Servicio;

const router = Router();

// Rutas para el alquiler
router.get('/', obtenerServicios);
router.get('/:id', obtenerServicio);
router.post('/', validarServicio, crearServicio);
router.put('/:id', validarServicio, actualizarServicio);
router.delete('/:id', eliminarServicio);

// Rutas a exportar
export { router }