import { Router } from "express";
import { createFactura, getAllFacturas, getFacturaById, updateFactura, deleteFactura } from "../db/actions/factura.actions.js"; 

const router = Router();


router.post('/create', async (req, res) => {
    const { productos, total, metodoPago, estadoPago, idEnvio, tipoEntrega } = req.body;
    try {
        const result = await createFactura({ productos, total, metodoPago, estadoPago, idEnvio, tipoEntrega });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear la factura" });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllFacturas();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener las facturas" });
    }
});


router.get('/:idFactura', async (req, res) => {
    const { idFactura } = req.params;
    try {
        const result = await getFacturaById(idFactura);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Factura no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener la factura" });
    }
});


router.put('/update/:idFactura', async (req, res) => {
    const { idFactura } = req.params;
    const updateData = req.body;
    try {
        const result = await updateFactura(idFactura, updateData);
        if (result) {
            res.status(200).json({ message: "Factura actualizada con éxito", result });
        } else {
            res.status(404).json({ message: "Factura no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar la factura" });
    }
});


router.delete('/delete/:idFactura', async (req, res) => {
    const { idFactura } = req.params;
    try {
        const result = await deleteFactura(idFactura);
        if (result) {
            res.status(200).json({ message: "Factura eliminada con éxito", result });
        } else {
            res.status(404).json({ message: "Factura no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar la factura" });
    }
});

export default router;
