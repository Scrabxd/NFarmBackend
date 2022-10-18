import { Request, Response } from "express";
import User from "../models/User";

export const getUsers = async(req: Request, res: Response) => {

    const user = await User.findAll()

    res.json({user})
}

export const getUser = async(req: Request, res: Response) => {

    const { id } = req.params

    const user = await User.findByPk( id )

    if( !user ){
        return res.status(404).json({
            msg: `No User with the id: ${id }`
        })
    }

    
    res.json({
        user
    })
}


export const postUser = async(req: Request, res: Response) => {

    const { name, email, password, last_name} = req.body

    let id =  Math.ceil(Math.random() * 1000000000) + 100;

    const newUser = {id, password , name, email, last_name}


    try {
        const existeEmail = await User.findOne({
            where:{
                email:email,
            }
        });

        if(existeEmail){
            return res.status(400).json({
                msg: `Existing User with email: ${email}`
            })
        }

        const createUser = User.build(newUser)
        await createUser.save();

        return res.json( {createUser} )

    } catch (error) {
        res.status(500).json({
            msg: 'Talk to  an admin'
        })
    }
    
}
    
export const putUser = async (req: Request, res: Response) => {
    
    const { id } = req.params
    const { body } = req

    try {

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                msg: `No existe usuario con id: ${ id }`
            });
        }
        await user.update( body )
         res.json( {user} )



    } catch (error) {
        res.status(500).json({
            msg: 'Talk to an admin'
        })
    }
}


export const delUser = async (req: any, res: any) => {


    const { id } = req.params
    const uid = req.id

        const user = await User.findByPk(id);
    
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