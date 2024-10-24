import { Router } from "express";
import { createEnvio, getAllEnvios, getEnvioById, updateEnvio, deleteEnvio } from "../db/actions/envio.actions.js";  

const router = Router();


router.post('/create', async (req, res) => {
    const { idEmpresaEnvio, idDireccion, fechaEnvio } = req.body;
    try {
        const result = await createEnvio({ idEmpresaEnvio, idDireccion, fechaEnvio });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el envío" });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllEnvios();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los envíos" });
    }
});


router.get('/:idEnvio', async (req, res) => {
    const { idEnvio } = req.params;
    try {
        const result = await getEnvioById(idEnvio);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Envío no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el envío" });
    }
});


router.put('/update/:idEnvio', async (req, res) => {
    const { idEnvio } = req.params;
    const updateData = req.body;
    try {
        const result = await updateEnvio(idEnvio, updateData);
        if (result) {
            res.status(200).json({ message: "Envío actualizado con éxito", result });
        } else {
            res.status(404).json({ message: "Envío no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el envío" });
    }
});


router.delete('/delete/:idEnvio', async (req, res) => {
    const { idEnvio } = req.params;
    try {
        const result = await deleteEnvio(idEnvio);
        if (result) {
            res.status(200).json({ message: "Envío eliminado con éxito", result });
        } else {
            res.status(404).json({ message: "Envío no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el envío" });
    }
});

export default router;
