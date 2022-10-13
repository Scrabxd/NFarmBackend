import { Request, Response } from "express";
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

    const { name, email, password, last_name} = req.body

    let id =  Math.ceil(Math.random() * 1000000000) + 100;

    const newUser = {id, password , name, email, last_name}


    try {
        const existeEmail = await Usuario.findOne({
            where:{
                email:email,
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg: `Existe usuario con email: ${email}`
            })
        }

        const createUser = Usuario.build(newUser)
        await createUser.save();

        return res.json( {createUser} )

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
    const uid = req.id

        const user = await Usuario.findByPk(id);
    
        if(!user){
            return res.status(404).json({
                msg: `No existe usuario con id: ${ id }`
            });
        }

        await user.update( { state:false } ); 

        const userAuth = req.user;

        // await usuario.destroy(); borrar permanentemente registros.
        
        res.json ( {
            user,
            uid,
            userAuth,
        })
        



}