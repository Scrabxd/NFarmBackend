import { NextFunction,Request,Response } from "express";

import jwt from 'jsonwebtoken';

import User from "../models/User";
interface IPayload {
    id:number
}


export const validateJWT = async(req:any, res:Response,next:NextFunction ) => {

    

    const token = req.header('x-token')

    if(!token){
        return res.status(401).json({
            msg:' No token in the petition '
        })
    }
    
    try {
        const payload = jwt.verify(token,process.env.SecretKey);

        const {id} = payload as IPayload
        
        const user = await User.findByPk(id)

        if( !user ){
            return res.status(401).json({
                msg:'User does not exist.'
            })
        }

    
        if(!user.state) {
            return res.status(401).json({
                msg:'Not a valid token - User deleted'
            }) 
        }
        
        
        req.user = user
        
        next();
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Unvalid Token'
        })
    }
   
    
}