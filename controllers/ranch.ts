import { Request, Response } from "express";
import jwt  from "jsonwebtoken";
import Ranch from "../models/ranch";


interface RPayload {
    id:number;
}



export const addRanch = (req:any,res:Response) =>{

    
    const {
        city,
        street,
        phoneNumber,
        postalCode,
        country,
        cowHeads,
        ranchName,
    } = req.body

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg:' No token in the petition '
        })
    }


    try {

        const payload = jwt.verify(token,process.env.SecretKey);

        const {id} = payload as RPayload


        let idR = Math.ceil(Math.random() * 1000000000) + 100;

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
        console.log(error)
        return res.status(400).json({
            msg:'Talk to an admin',

        })
    }

    
}