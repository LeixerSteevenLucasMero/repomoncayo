import { Router } from 'express';

// Importar las validaciones
import { validarLocal } from '../validators/index';

// Importar las funciones del controlador alquiler
import { Local } from '../controllers';
const {
    obtenerLocales,
    obtenerLocal,
    crearLocal,
    actualizarLocal,
    eliminarLocal
} = Local;

const router = Router();

// Rutas para el alquiler
router.get('/', obtenerLocales);
router.get('/:id', obtenerLocal);
router.post('/', validarLocal, crearLocal);
router.put('/:id', validarLocal, actualizarLocal);
router.delete('/:id', eliminarLocal);

// Rutas a exportar
export { router }