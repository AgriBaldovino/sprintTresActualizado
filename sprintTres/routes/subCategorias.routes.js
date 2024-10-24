import { Router } from "express";
import { createSubcategoria, getAllSubcategorias, getSubcategoriaById, updateSubcategoria, deleteSubcategoria, getSubcategoriasByCategoriaId } from "../db/actions/subCategorias.actions.js";

const router = Router();


router.post('/create', async (req, res) => {
  const { nombre, descripcionSubcategoria, categoriaId } = req.body;
  try {
    const result = await createSubcategoria({ nombre, descripcionSubcategoria, categoriaId });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "Error al crear la subcategoría" });
  }
});


router.get('/', async (req, res) => {
  try {
    const result = await getAllSubcategorias();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las subcategorías" });
  }
});


router.get('/categoria/:categoriaId', async (req, res) => {
  const { categoriaId } = req.params;
  try {
    const result = await getSubcategoriasByCategoriaId(categoriaId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las subcategorías de la categoría" });
  }
});


router.get('/:idSubcategoria', async (req, res) => {
  const { idSubcategoria } = req.params;
  try {
    const result = await getSubcategoriaById(idSubcategoria);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Subcategoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la subcategoría" });
  }
});


router.put('/update/:idSubcategoria', async (req, res) => {
  const { idSubcategoria } = req.params;
  const updateData = req.body;
  try {
    const result = await updateSubcategoria(idSubcategoria, updateData);
    if (result) {
      res.status(200).json({ message: "Subcategoría actualizada con éxito", result });
    } else {
      res.status(404).json({ message: "Subcategoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la subcategoría" });
  }
});


router.delete('/delete/:idSubcategoria', async (req, res) => {
  const { idSubcategoria } = req.params;
  try {
    const result = await deleteSubcategoria(idSubcategoria);
    if (result) {
      res.status(200).json({ message: "Subcategoría eliminada con éxito", result });
    } else {
      res.status(404).json({ message: "Subcategoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la subcategoría" });
  }
});

export default router;
