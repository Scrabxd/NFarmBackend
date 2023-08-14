import { NextFunction, Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config()

export const validateAPIKey = async(req: Request, res: Response, next: NextFunction) => {
    if(!req.query.apiToken){
        return res.json({
            msg:"You need an APIKey to access the backend"
        })
        
    }else{
        if(req.query.apiToken !== process.env.ApiKey ){
        return res.json({
                msg:"APIKey Invalid!"
            })
        }
    }
    
    next()

}