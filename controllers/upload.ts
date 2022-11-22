import fs from 'fs';
import path from 'path';

import { Request, Response } from "express"

import Cow from '../models/cows'; '../models';
import {uploadFile} from '../helpers'

import cloudinary from 'cloudinary';
import { idGen } from '../helpers/idGen';
import cowImage from '../models/cowImg';

cloudinary.v2.config({
    cloud_name:'dxchpuxwt',
    api_key: '735768378421165',
    api_secret: 'urb2naSvL4Z1fe4qHMOHka2gHJ0'
});

export const uploadFiles = async( req:any, res:Response) => {

    const cowId = req.header('idCow');

    try {

        const {idGenerated} = idGen();
        
        const { tempFilePath } = req.files.file

        const { secure_url } = await cloudinary.v2.uploader.upload( tempFilePath )
        
        const cowImgData = {
            id:idGenerated,
            idCow: cowId,
            images:secure_url
        }

        const createImg = cowImage.build( cowImgData );
        await createImg.save();
        
        return res.json({
            createImg
        })

    } catch (error) {
        console.log(error)
        res.status(400).json({
            msg: 'Talk to an admin'
        });
    }

}


export const getImage = async(req: Request, res: Response) => {

    const cowId = req.header('idCow');

    try {
        const cowImg = await cowImage.findOne({
            where:{
                idCow: cowId
            }
        })

        return res.status(200).json({
            cowImg
        })
        
    } catch (err) {
        console.log(err)
        res.status(400).json({
            msg: 'Talk to an admin - cow'
        });

    }



}





