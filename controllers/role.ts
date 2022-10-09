import {Request, Response} from 'express';
import Role from '../models/roles';


export const getRoles = async (req: Request, res: Response) => {

    const role = await Role.findAll();
    
    res.json( { role } )
}



export const getRole = async( req:Request, res:Response ) => {

    const { id } = req.params;
    
    const user_role = await Role.findByPk(id);



}