import { Router } from "express";
import { createCliente, getAllClientes, getClienteById, updateCliente, deleteCliente } from "../db/actions/cliente.actions.js";

const router = Router();


router.post('/create', async (req, res) => {
    const { idUsuario, direcciones } = req.body;
    try {
        const result = await createCliente({ idUsuario, direcciones });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el cliente" });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllClientes();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los clientes" });
    }
});


router.get('/:idCliente', async (req, res) => {
    const { idCliente } = req.params;
    try {
        const result = await getClienteById(idCliente);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el cliente" });
    }
});


router.put('/update/:idCliente', async (req, res) => {
    const { idCliente } = req.params;
    const updateData = req.body;
    try {
        const result = await updateCliente(idCliente, updateData);
        if (result) {
            res.status(200).json({ message: "Cliente actualizado con éxito", result });
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el cliente" });
    }
});


router.delete('/delete/:idCliente', async (req, res) => {
    const { idCliente } = req.params;
    try {
        const result = await deleteCliente(idCliente);
        if (result) {
            res.status(200).json({ message: "Cliente eliminado con éxito", result });
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el cliente" });
    }
});

export default router;
