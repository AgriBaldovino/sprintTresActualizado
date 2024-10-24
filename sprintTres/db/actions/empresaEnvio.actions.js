import { connectToDatabase } from "../connection.js";
import EmpresaEnvio from "../schemas/empresaEnvio.schema.js";


export const createEmpresaEnvio = async({ empresa, telefono, direccion, urlSeguimiento }) => {
    try {
        await connectToDatabase();
        const res = await EmpresaEnvio.create({ empresa, telefono, direccion, urlSeguimiento });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getEmpresaEnvioById = async (idEmpresaEnvio) => {
    try {
        await connectToDatabase();
        const res = await EmpresaEnvio.findById(idEmpresaEnvio);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const updateEmpresaEnvio = async (idEmpresaEnvio, updateData) => {
    try {
        await connectToDatabase();
        const res = await EmpresaEnvio.findByIdAndUpdate(idEmpresaEnvio, updateData, { new: true });
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const deleteEmpresaEnvio = async (idEmpresaEnvio) => {
    try {
        await connectToDatabase();
        const res = await EmpresaEnvio.findByIdAndDelete(idEmpresaEnvio);
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};


export const getAllEmpresasEnvio = async () => {
    try {
        await connectToDatabase();
        const res = await EmpresaEnvio.find();
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        console.log(error);
    }
};
