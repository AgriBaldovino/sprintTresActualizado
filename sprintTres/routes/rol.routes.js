import { Router } from "express";
import { createRol, getAllRoles, getRolById, updateRol, deleteRol } from "../db/actions/rol.actions.js"; 

const router = Router();


router.post('/create', async (req, res) => {
    const { nombre, internal } = req.body;
    try {
        const result = await createRol({ nombre, internal });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el rol" });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllRoles();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los roles" });
    }
});


router.get('/:idRol', async (req, res) => {
    const { idRol } = req.params;
    try {
        const result = await getRolById(idRol);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Rol no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el rol" });
    }
});


router.put('/update/:idRol', async (req, res) => {
    const { idRol } = req.params;
    const updateData = req.body;
    try {
        const result = await updateRol(idRol, updateData);
        if (result) {
            res.status(200).json({ message: "Rol actualizado con éxito", result });
        } else {
            res.status(404).json({ message: "Rol no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el rol" });
    }
});


router.delete('/delete/:idRol', async (req, res) => {
    const { idRol } = req.params;
    try {
        const result = await deleteRol(idRol);
        if (result) {
            res.status(200).json({ message: "Rol eliminado con éxito", result });
        } else {
            res.status(404).json({ message: "Rol no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el rol" });
    }
});

export default router;
