import { Router } from "express";
import { createEmpresaEnvio, getAllEmpresasEnvio, getEmpresaEnvioById, updateEmpresaEnvio, deleteEmpresaEnvio } from "../db/actions/empresaEnvio.actions.js";

const router = Router();


router.post('/create', async (req, res) => {
    const { empresa, telefono, direccion, urlSeguimiento } = req.body;
    try {
        const result = await createEmpresaEnvio({ empresa, telefono, direccion, urlSeguimiento });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear la empresa de envío" });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllEmpresasEnvio();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las empresas de envío" });
    }
});


router.get('/:idEmpresaEnvio', async (req, res) => {
    const { idEmpresaEnvio } = req.params;
    try {
        const result = await getEmpresaEnvioById(idEmpresaEnvio);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Empresa de envío no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la empresa de envío" });
    }
});


router.put('/update/:idEmpresaEnvio', async (req, res) => {
    const { idEmpresaEnvio } = req.params;
    const updateData = req.body;
    try {
        const result = await updateEmpresaEnvio(idEmpresaEnvio, updateData);
        if (result) {
            res.status(200).json({ message: "Empresa de envío actualizada con éxito", result });
        } else {
            res.status(404).json({ message: "Empresa de envío no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la empresa de envío" });
    }
});


router.delete('/delete/:idEmpresaEnvio', async (req, res) => {
    const { idEmpresaEnvio } = req.params;
    try {
        const result = await deleteEmpresaEnvio(idEmpresaEnvio);
        if (result) {
            res.status(200).json({ message: "Empresa de envío eliminada con éxito", result });
        } else {
            res.status(404).json({ message: "Empresa de envío no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la empresa de envío" });
    }
});

export default router;
