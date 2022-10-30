import { Request, Response } from "express"

import { generateURl } from "../db/s3Config" 
import { idGen } from "../helpers";
import cowImage from "../models/cowImg";

export const uploadManager = async( req: Request, res: Response ) => {

    const url = generateURl()

    const cowName = req.header('cowName');

    try {

        const { idGenerated } = idGen();

        const img =  {
            id: idGenerated,
            idCow: cowName,
            lg: url
        }

        const createCowImg = cowImage.build(img);
        await createCowImg.save();

        return res.status(200).json({
            createCowImg
        })

    } catch ( error ) {
        
        console.log( error );

        return res.status(400).json({
            msg: 'Talk to an admin'
        })
    }
        
}


export const getManager = async ( req: Request, res: Response ) => {

    const cowName = req.header('cowName');
    
    try {

        const findCowImgaes = await cowImage.findAll({
            where:{
                idCow: cowName
            }
        });

        return res.status( 200 ).json({
            findCowImgaes
        })
        
    } catch ( error ) {
        
        console.log( error );

        return res.status(200).json({
            msg:'Talk to an admin'
        })
    }
}