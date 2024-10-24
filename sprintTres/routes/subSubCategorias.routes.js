import { Router } from "express";
import { createSubsubcategoria, getAllSubsubcategorias, getSubsubcategoriaById, updateSubsubcategoria, deleteSubsubcategoria, getSubsubcategoriasBySubcategoriaId } from "../db/actions/subSubCategorias.actions.js";

const router = Router();


router.post('/create', async (req, res) => {
  const { nombre, descripcionSubsubcategoria, subcategoriaId } = req.body;
  try {
    const result = await createSubsubcategoria({ nombre, descripcionSubsubcategoria, subcategoriaId });
    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ message: "Error al crear la subsubcategoría" });
  }
});


router.get('/', async (req, res) => {
  try {
    const result = await getAllSubsubcategorias();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las subsubcategorías" });
  }
});


router.get('/subcategoria/:subcategoriaId', async (req, res) => {
  const { subcategoriaId } = req.params;
  try {
    const result = await getSubsubcategoriasBySubcategoriaId(subcategoriaId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener las subsubcategorías de la subcategoría" });
  }
});


router.get('/:idSubsubcategoria', async (req, res) => {
  const { idSubsubcategoria } = req.params;
  try {
    const result = await getSubsubcategoriaById(idSubsubcategoria);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: "Subsubcategoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al obtener la subsubcategoría" });
  }
});


router.put('/update/:idSubsubcategoria', async (req, res) => {
  const { idSubsubcategoria } = req.params;
  const updateData = req.body;
  try {
    const result = await updateSubsubcategoria(idSubsubcategoria, updateData);
    if (result) {
      res.status(200).json({ message: "Subsubcategoría actualizada con éxito", result });
    } else {
      res.status(404).json({ message: "Subsubcategoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar la subsubcategoría" });
  }
});


router.delete('/delete/:idSubsubcategoria', async (req, res) => {
  const { idSubsubcategoria } = req.params;
  try {
    const result = await deleteSubsubcategoria(idSubsubcategoria);
    if (result) {
      res.status(200).json({ message: "Subsubcategoría eliminada con éxito", result });
    } else {
      res.status(404).json({ message: "Subsubcategoría no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar la subsubcategoría" });
  }
});

export default router;
