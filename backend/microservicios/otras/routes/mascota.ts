import { Router } from 'express';

// Importar las validaciones
import { validarMascota } from '../validators/index';

// Importar las funciones del controlador alquiler
import { Mascota } from '../controllers';
const {
    obtenerMascotas,
    obtenerMascota,
    crearMascota,
    actualizarMascota,
    eliminarMascota
} = Mascota;

const router = Router();

// Rutas para el alquiler
router.get('/', obtenerMascotas);
router.get('/:id', obtenerMascota);
router.post('/', validarMascota, crearMascota);
router.put('/:id', validarMascota, actualizarMascota);
router.delete('/:id', eliminarMascota);

// Rutas a exportar
export { router }