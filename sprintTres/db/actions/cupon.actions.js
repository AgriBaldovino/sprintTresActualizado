import { connectToDatabase } from "../connection.js";
import Cupon from "../schemas/cupon.schema.js";


export const createCupon = async({ nombreCupon, porcentaje, fechaInicio, fechaFin }) => {
    try {
        await connectToDatabase();
        const res = await Cupon.create({ nombreCupon, porcentaje, fechaInicio, fechaFin });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getCuponById = async (idCupon) => {
    try {
        await connectToDatabase();
        const res = await Cupon.findById(idCupon);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateCupon = async (idCupon, updateData) => {
    try {
        await connectToDatabase();
        const res = await Cupon.findByIdAndUpdate(idCupon, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteCupon = async (idCupon) => {
    try {
        await connectToDatabase();
        const res = await Cupon.findByIdAndDelete(idCupon);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllCupones = async () => {
    try {
        await connectToDatabase();
        const res = await Cupon.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
