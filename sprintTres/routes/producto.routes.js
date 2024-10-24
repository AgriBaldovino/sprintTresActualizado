import { Router } from "express";
import { createProducto, getAllProductos, getProductoById, updateProducto, deleteProducto, getProductosBySubsubcategoriaId } from "../db/actions/producto.actions.js"; 

const router = Router();


router.post('/create', async (req, res) => {
    const { nombre, descripcion, talle, color, stock, precioUnPago, precio, subsubcategoriaId, imagenes } = req.body;
    try {
        const result = await createProducto({ nombre, descripcion, talle, color, stock, precioUnPago, precio, subsubcategoriaId, imagenes });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ message: "Error al crear el producto" });
    }
});


router.get('/', async (req, res) => {
    try {
        const result = await getAllProductos();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los productos" });
    }
});


router.get('/:idProducto', async (req, res) => {
    const { idProducto } = req.params;
    try {
        const result = await getProductoById(idProducto);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al obtener el producto" });
    }
});


router.get('/subsubcategoria/:subsubcategoriaId', async (req, res) => {
    const { subsubcategoriaId } = req.params;
    try {
        const productos = await getProductosBySubsubcategoriaId(subsubcategoriaId);
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener productos por subsubcategoría" });
    }
});


router.put('/update/:idProducto', async (req, res) => {
    const { idProducto } = req.params;
    const updateData = req.body;
    try {
        const result = await updateProducto(idProducto, updateData);
        if (result) {
            res.status(200).json({ message: "Producto actualizado con éxito", result });
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al actualizar el producto" });
    }
});


router.delete('/delete/:idProducto', async (req, res) => {
    const { idProducto } = req.params;
    try {
        const result = await deleteProducto(idProducto);
        if (result) {
            res.status(200).json({ message: "Producto eliminado con éxito", result });
        } else {
            res.status(404).json({ message: "Producto no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar el producto" });
    }
});

export default router;
