import { Request, Response } from "express";
import { getIdUser, idGen } from "../helpers";
import Cow from "../models/cows";



export const addCow = async( req: Request, res: Response ) => {

        const { id } = getIdUser( req )
    
        const { idGenerated } = idGen()
        
        
        const {
            certificates,
            name,
            breed,
            weight,
            
        } = req.body

    try {
        
        const existCow = await Cow.findOne({
            where:{
                name:name,
                idRanch:id,
                state:true
            }
        })

        if( existCow ){

            return res.status( 400 ).json({
                msg: 'Cow Exits in this ranch'
            })

        }
        const cowData = {
            id:idGenerated, 
            certificates,
            name,
            breed,
            weight,
            idRanch:id
        }

        const createCow = Cow.build( cowData )
        await createCow.save();

        return res.json({

            createCow
        
        })
    
    } catch (error) {

        console.log( error );

        return res.status(400).json({

            msg:'Talk to an admin'

        })
        
    }
}


export const getCows = async ( req: Request , res: Response ) => {

    const { id } = getIdUser( req )
    
    
        try {
            const findCows = await Cow.findAll({
                where:{
                    idRanch : id,
                    state:true
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

export const updateCow = async( req:Request, res: Response ) => {
    
    const ranchId = req.header( 'ranchId' );

    const name = req.header( 'cowName' );

    const { body } = req

    try {
        const cow = await Cow.findOne({
            where:{
                idRanch: ranchId,
                id: name
            }
        })

        cow?.update( body )

        res.status( 200 ).json({
            cow
        })


    } catch ( error ) {
        console.log( error );

        return res.status( 400 ).json({
            msg: 'Talk to the admin'
        })
    }

}

export const deleteCow = async ( req: Request, res: Response ) => {

    const ranchId = req.header( 'ranchId' );
    
    const name = req.header( 'cowName' );

    try {

        const cow = await Cow.findOne({
            where:{
                idRanch: ranchId,
                id:name
            }
        })

        cow?.update({ state: false })

        return res.status ( 200 ).json({
            cow
        })
        
    } catch ( error ) {

        console.log( error );

        return res.status( 400 ).json({
            msg: 'Talk to the admin'
        })
    }



}