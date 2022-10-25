import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { getIdUser, idGen } from "../helpers";
import Cow from "../models/cows";

interface CPayload {

    id:number;
    
}



export const addCow = async( req: Request, res: Response ) => {

        const { id } = getIdUser( req )
    
    try {
        const { idGenerated } = idGen()
        
        const {
            certificates,
            name,
            breed,
            weight,

        } = req.body


        const cowData = {
            id:idGenerated, 
            certificates,
            name,
            breed,
            weight,
            idRanch:id
        }

        const createCow = Cow.build(cowData)
        await createCow.save();

        return res.json({
            createCow
        })
    
    } catch (error) {
        
    }
}


export const getCows = async ( req: Request , res: Response ) => {

    const { id } = getIdUser( req )
    
    
        try {
            const findCows = await Cow.findAll({
                where:{
                    idRanch : id
                }
            });
            
            return res.status( 200 ).json({
                findCows
            });
            
        } catch ( error ) {
            console.log( error );
            return res.status( 200 ).json({
                msg:'Talk to the admin'
            })
        }
    
    
    
    
}

export const updateCow = ( req:Request, res: Response ) => {
    const { id } = getIdUser( req )
}

export const deleteCow = ( req: Request, res: Response ) => {
    const { id } = getIdUser( req )
}