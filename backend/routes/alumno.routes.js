import { Router } from 'express';
import {
  getAlumnos,
  getAlumno,
  createAlumnoHandler,
  updateAlumnoHandler,
  deleteAlumnoHandler,
  getCursoConMaterias,
  getCursoConMateriasAlumno,
} from '../controllers/alumno.controller.js';
import { authenticate, authorize } from '../middlewares/auth.middleware.js';

const router = Router();

const rolesPermitidos = ['admin', 'profesor'];

router.get('/', authenticate, authorize(rolesPermitidos), getAlumnos);
router.get('/:id', authenticate, authorize(rolesPermitidos), getAlumno);
router.post('/', authenticate, authorize(rolesPermitidos), createAlumnoHandler);
router.put('/:id', authenticate, authorize(rolesPermitidos), updateAlumnoHandler);
router.delete('/:id', authenticate, authorize(rolesPermitidos), deleteAlumnoHandler);
router.get('/:id/curso-materias', authenticate, authorize(['admin', 'profesor']), getCursoConMaterias);
router.get('/curso-materias', authenticate, authorize(['alumno']), getCursoConMateriasAlumno);


export default router;
