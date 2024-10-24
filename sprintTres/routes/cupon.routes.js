import {Router} from "express";
import {createCupon, deleteCupon, getCuponById, updateCupon, getAllCupones,} from "../db/actions/cupon.actions.js";
const router = Router()

router.post('/create', async(req,res)=>{
    const { nombreCupon, porcentaje, fechaInicio, fechaFin } = req.body
    try{
        const result = await createCupon({ nombreCupon, porcentaje, fechaInicio, fechaFin })
        res.status(200).json(result)
    }catch(error){
        res.status(400).json()
    }
})


router.get('/', async (req, res) => {
    try {
        const cupones = await getAllCupones();
        res.status(200).json(cupones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener los cupones" });
    }
});


router.get('/:idCupon', async (req, res) => {
    const { idCupon } = req.params;
    try {
        const result = await getCuponById(idCupon);
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: "Cupón no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al obtener el cupón" });
    }
});


router.put('/update/:idCupon', async (req, res) => {
    const { idCupon } = req.params;
    const updateData = req.body; 
    try {
        const result = await updateCupon(idCupon, updateData);
        if (result) {
            res.status(200).json({ message: "Cupón actualizado con éxito", result });
        } else {
            res.status(404).json({ message: "Cupón no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al actualizar el cupón" });
    }
});


router.delete('/delete/:idCupon', async (req, res) => {
    const { idCupon } = req.params; 
    try {
        const result = await deleteCupon(idCupon);
        if (result) {
            res.status(200).json({ message: "Cupón eliminado con éxito", result });
        } else {
            res.status(404).json({ message: "Cupón no encontrado" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error al eliminar el cupón" });
    }
});

export default router