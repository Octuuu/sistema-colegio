import {
  getAllMaterias,
  getMateriaById,
  createMateria,
  updateMateria,
  deleteMateria,
} from '../models/materia.model.js';

// Obtener todos las materias
export const getMaterias = async (req, res) => {
  try {
    const materias = await getAllMaterias();
    res.json(materias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener un materia por ID
export const getMateria = async (req, res) => {
  try {
    const materia = await getMateriaById(req.params.id);
    if (!materia) return res.status(404).json({ error: 'materia no encontrada' });
    res.json(materia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Crear nuevo materia
export const createMateriaHandler = async (req, res) => {
  try {
    const id = await createMateria(req.body);
    res.status(201).json({ id, message: 'materia creada correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar materia
export const updateMateriaHandler = async (req, res) => {
  try {
    await updateMateria(req.params.id, req.body);
    res.json({ message: 'materia actualizado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar materia
export const deleteMateriaHandler = async (req, res) => {
  try {
    await deleteMateria(req.params.id);
    res.json({ message: 'materia eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
