import { connectToDatabase } from "../connection.js";
import Envio from "../schemas/envio.schema.js";


export const createEnvio = async({ idEmpresaEnvio, idDireccion, fechaEnvio }) => {
    try {
        await connectToDatabase();
        const res = await Envio.create({ idEmpresaEnvio, idDireccion, fechaEnvio });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getEnvioById = async (idEnvio) => {
    try {
        await connectToDatabase();
        const res = await Envio.findById(idEnvio).populate('idEmpresaEnvio').populate('idDireccion');
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateEnvio = async (idEnvio, updateData) => {
    try {
        await connectToDatabase();
        const res = await Envio.findByIdAndUpdate(idEnvio, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteEnvio = async (idEnvio) => {
    try {
        await connectToDatabase();
        const res = await Envio.findByIdAndDelete(idEnvio);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllEnvios = async () => {
    try {
        await connectToDatabase();
        const res = await Envio.find().populate('idEmpresaEnvio').populate('idDireccion');
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
