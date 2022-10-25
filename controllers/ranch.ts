import { Request, Response } from "express";
import jwt  from "jsonwebtoken";
import { getIdUser } from "../helpers";
import Ranch from "../models/ranch";


interface RPayload {
    id:number;
}


export const addRanch = ( req:any, res:Response ) =>{

    const {
        city,
        street,
        phoneNumber,
        postalCode,
        country,
        cowHeads,
        ranchName,
    } = req.body

    const token = req.header( 'x-token' );

    if( !token ){
        return res.status(401).json({
            msg:' No token in the petition '
        })
    }

    try {

        const {id} = getIdUser(req)

        let idR = Math.ceil( Math.random() * 1000000000 ) + 100;

        const newRanch = {
            id: idR,
            city,
            street,
            phoneNumber,
            postalCode,
            country,
            cowHeads,
            ranchName,
            idFarmer:id
        }

        const createRanch = Ranch.build(newRanch);
        createRanch.save();

        return res.status(201).json({
            createRanch
        })
        
    } catch (error) {
        console.log( error )
        return res.status(400).json({
            msg:'Talk to an admin',

        })
    }

    
}



export const getRanch  = async( req: Request , res: Response ) => {

    
  const {id} = getIdUser(req)


    try {
        const ranch = await Ranch.findAll({
            where:{
                idFarmer:id
            }
        });
        
        return res.status(200).json({ranch});
        
    } catch (error) {
        console.log(error);
        return res.status(200).json({
            msg:'Talk to the admin'
        })
    }


}



export const updateRanch = ( req:Request, res: Response ) => {
    const {id} = getIdUser(req)
}

export const deleteRanch = (req: Request, res: Response ) => {
    const {id} = getIdUser(req)
}