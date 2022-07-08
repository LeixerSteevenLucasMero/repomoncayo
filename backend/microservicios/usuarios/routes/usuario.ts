import { Router } from 'express';

// Importar las validaciones
import { validarUsuario } from '../validators/index';

// Importar las funciones del controlador alquiler
import { Usuario } from '../controllers';
const {
    obtenerUsuarios,
    obtenerUsuario,
    crearUsuario,
    actualizarUsuario,
    eliminarUsuario,
    login
} = Usuario;

const router = Router();

// Rutas para el alquiler
router.get('/', obtenerUsuarios);
router.get('/:id', obtenerUsuario);
router.post('/', validarUsuario, crearUsuario);
router.put('/:id', validarUsuario, actualizarUsuario);
router.delete('/:id', eliminarUsuario);
router.get('/:user/:pass', login);

// Rutas a exportar
export { router }