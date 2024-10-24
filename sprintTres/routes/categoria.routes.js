import { Router } from "express";
import { createCategoria, getAllCategorias, getCategoriaById, updateCategoria, deleteCategoria } from "../db/actions/categoria.actions.js";

const router = Router();


router.post('/create', async (req, res) => {
    const { nombre, descripcionCategoria } = req.body;
    try {
        const result = await createCategoria({ nombre, descripcionCategoria });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear la categoría" });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllCategorias();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las categorías" });
    }
});


router.get('/:idCategoria', async (req, res) => {
    const { idCategoria } = req.params;
    try {
        const result = await getCategoriaById(idCategoria);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Categoría no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la categoría" });
    }
});


router.put('/update/:idCategoria', async (req, res) => {
    const { idCategoria } = req.params;
    const updateData = req.body;
    try {
        const result = await updateCategoria(idCategoria, updateData);
        if (result) {
            res.status(200).json({ message: "Categoría actualizada con éxito", result });
        } else {
            res.status(404).json({ message: "Categoría no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la categoría" });
    }
});


router.delete('/delete/:idCategoria', async (req, res) => {
    const { idCategoria } = req.params;
    try {
        const result = await deleteCategoria(idCategoria);
        if (result) {
            res.status(200).json({ message: "Categoría eliminada con éxito", result });
        } else {
            res.status(404).json({ message: "Categoría no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la categoría" });
    }
});

export default router;
