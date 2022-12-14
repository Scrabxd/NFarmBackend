import { Request, Response } from "express";
import { getIdUser, idGen } from "../helpers";
import Ranch from "../models/ranch";




export const addRanch = async( req:any, res:Response ) =>{

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

        return res.status( 401 ).json({
            msg:' No token in the petition '
        })
    }
    try {

        const { id } = getIdUser(req)

        const { idGenerated } = idGen()

        const existRanch = await Ranch.findOne({
            where:{
                street:street,
                country:country,
                idFarmer: id,
                state:true

            }
        })
        
        if ( existRanch ){
            return res.status(400).json({
                msg:'This Ranch Already exists'
            })

        }
        const newRanch = {
            id: idGenerated,
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
        await createRanch.save();

        return res.status(201).json({
            createRanch
        })

        
    } catch ( error ) {

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
                idFarmer:id,
                state:true
            }
        });
        
        return res.status(200).json({ranch});
        
    } catch ( error ) {

        console.log( error );

        return res.status( 200 ).json({

            msg:'Talk to the admin'
        })
    }


}



export const updateRanch = async ( req:any, res: Response ) => {

    const { id } = getIdUser( req )

    const name  = req.header('ranchId');

    const { body } = req;

    try {
        
        const ranch = await Ranch.findOne({
            where:{
                idFarmer: id,
                id: name
            }
        })

        ranch?.update(body);

        return res.status( 200 ).json({
            ranch
        })

    } catch ( error ) {
        console.log( error );

        return res.status( 400 ).json({
            msg: 'Talk to the admin'
        });
    }


}

export const deleteRanch = async ( req: Request, res: Response ) => {

    const { id } = getIdUser( req );

    const name = req.header('ranchId');

    try {

        const ranch = await Ranch.findOne({
            where:{
                idFarmer: id,
                id: name
            }
        })

        ranch?.update( { state:false } );

        return res.status( 200 ).json({
            ranch
        })
        
    } catch ( error ) {
        
        console.log( error );

        return res.status( 400 ).json({
            msg: 'Talk to the admin '
        })
    }


}