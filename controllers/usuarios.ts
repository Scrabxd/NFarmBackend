import { Request, Response } from "express";
import { exitCode } from "process";
import { json } from "stream/consumers";
import Usuario from "../models/usuario";

export const getUsers = async(req: Request, res: Response) => {

    const usuarios = await Usuario.findAll()

    res.json({usuarios})
}

export const getUser = async(req: Request, res: Response) => {

    const { id } = req.params

    const usuario = await Usuario.findByPk( id )

    if( !usuario ){
        return res.status(404).json({
            msg: `No existe un usuario con el id ${id }`
        })
    }

    
    res.json({
        usuario
    })
}


export const postUser = async(req: Request, res: Response) => {

    const { body } = req;

    try {

        const existeEmail = await Usuario.findOne({
            where:{
                email:body.email
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg: `Existe usuario con email: ${body.email}`
            })
        }
        
        const usuario = Usuario.build(body)
        await usuario.save();

        return res.json( {usuario} )

    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
    
}
    



export const putUser = async (req: Request, res: Response) => {
    
    const { id } = req.params
    const { body } = req

    try {

        const usuario = await Usuario.findByPk(id);

        if(!usuario){
            return res.status(404).json({
                msg: `No existe usuario con id: ${ id }`
            });
        }
        await usuario.update( body )
         res.json( {usuario} )



    } catch (error) {
        res.status(500).json({
            msg: 'Hable con el administrador'
        })
    }
}


export const delUser = async (req: Request, res: Response) => {


    const { id } = req.params

        const usuario = await Usuario.findByPk(id);
    
        if(!usuario){
            return res.status(404).json({
                msg: `No existe usuario con id: ${ id }`
            });
        }

        await usuario.update( { estado:false } ); 

        // await usuario.destroy(); borrar permanentemente registros.
        
        res.json ( {
            usuario
        })
        



}