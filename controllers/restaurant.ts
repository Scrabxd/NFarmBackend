import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import Branch from "../models/branch";


interface UPayload {
    id:number;
}

interface IReq extends Request {
    user:string
}


export const addRestaurant = async(req:Request , res:Response) => {
    
    const 
    {
        city,
        street,
        phoneNumber,
        outsideNumber,
        postalCode,
        country
        
    } = req.body

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg:' No token in the petition '
        })
    }

    try {
        
        const payload =  jwt.verify(token,process.env.SecretKey);

        const { id } = payload as UPayload;


        
        let idRes =  Math.ceil(Math.random() * 1000000000) + 100;

        const newBranch = {
            id: idRes, 
            city ,
            street,
            outsideNumber,
            phoneNumber,
            postalCode,
            country,
            idOwner: id
        }

        const createBranch = Branch.build(newBranch);
        createBranch.save();

        return res.status(201).json({
            createBranch
        })

    } catch (error) {
        return res.status(400).json({
            msg:'Talk to an admin'
        })

    }






}