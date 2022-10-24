import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import Cow from "../models/cows";

interface CPayload {

    id:number;
    
}



export const addCow = (req:any, res:Response) => {

    const token = req.headers('x-token')

    const payload =  jwt.verify(token,process.env.SecretKey);

    const { id } = payload as CPayload;
    

    try {
        
        const {


        } = req.body


        return res.json({
            msg:'Oki'
        })
    
    } catch (error) {
        
    }
}


export const getCows = ( req:any , res:Response ) => {

        const token = req.header( 'x-token' );
    
        const payload = jwt.verify( token, process.env.SecretKey );
        
        const { id } = payload as CPayload;
    
    
        try {
            const findCows = Cow.findAll({
                where:{
                    idRanch : id
                }
            });
            
            return res.status(200).json({
                findCows
            });
            
        } catch (error) {
            console.log(error);
            return res.status(200).json({
                msg:'Talk to the admin'
            })
        }
    
    
    
    
}