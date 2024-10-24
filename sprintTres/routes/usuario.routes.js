import { Router } from "express";
import { createUsuario, getAllUsuarios, getUsuarioById, updateUsuario, deleteUsuario } from "../db/actions/usuario.actions.js";

const router = Router();


router.post('/create', async (req, res) => {
    const { nombre, apellido, email, telefono, dni, contrasenia, idRol } = req.body;
    try {
        const result = await createUsuario({ nombre, apellido, email, telefono, dni, contrasenia, idRol });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el usuario", error });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllUsuarios();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los usuarios", error });
    }
});


router.get('/:idUsuario', async (req, res) => {
    const { idUsuario } = req.params;
    try {
        const result = await getUsuarioById(idUsuario);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el usuario", error });
    }
});


router.put('/update/:idUsuario', async (req, res) => {
    const { idUsuario } = req.params;
    const updateData = req.body;
    try {
        const result = await updateUsuario(idUsuario, updateData);
        if (result) {
            res.status(200).json({ message: "Usuario actualizado con éxito", result });
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el usuario", error });
    }
});


router.delete('/delete/:idUsuario', async (req, res) => {
    const { idUsuario } = req.params;
    try {
        const result = await deleteUsuario(idUsuario);
        if (result) {
            res.status(200).json({ message: "Usuario eliminado con éxito", result });
        } else {
            res.status(404).json({ message: "Usuario no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el usuario", error });
    }
});

export default router;

