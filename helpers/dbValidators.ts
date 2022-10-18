import Usuario from "../models/User";

export const usuarioValid = async(id:string = ' ') => {
    const existeUsuario = await Usuario.findByPk(id);
    if(!existeUsuario){
        throw new Error(` El id: ${id} no existe`)
    }
}

    
