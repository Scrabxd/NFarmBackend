import { Request, Response } from "express";
import { getIdUser } from "../helpers"  ;
import Branch from "../models/branch";




export const addRestaurant = async(req:Request , res:Response) => {
    
    const 
    {
        city,
        street,
        phoneNumber,
        outsideNumber,
        postalCode,
        country,
        branchName
        
    } = req.body

    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            msg:' No token in the petition '
        })
    }

    try {
        
        const {id} = getIdUser(req);
        
        let idRes =  Math.ceil(Math.random() * 1000000000) + 100;

        const newBranch = {
            id: idRes, 
            city ,
            street,
            outsideNumber,
            phoneNumber,
            postalCode,
            country,
            idOwner: id,
            branchName,
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


export const getRestaurants = async( req: any , res: Response ) => {
    
    const {id} = getIdUser(req);

    //Get all active restaurants.

    try {

        const findRestaurant = await Branch.findAll({
            where:{
                idOwner : id,
                state:true
            }
        })

        return res.status(200).json({

            findRestaurant,
            
        })


    } catch (error) {

        console.log(error);

        return res.status(200).json({

            msg:'Talk to an admin'
        
        })
        
    }

}



export const updateRestaurant = async(req: any, res: Response) => {

    const { id } = getIdUser( req );
    
    const name = req.header('branchName');

    const { body } = req



    try {


        const branch = await Branch.findOne({
            where:{
                idOwner: id,
                branchName: name
            }
        })

        branch?.update( body )

        return res.status(200).json({
            branch
        })
        // await branch?.update( body )

    } catch ( error ) {
        console.log(error);

        return res.status(400).json({
            msg:'Talk to an admin'
        })
    }

    
}


export const deleteRestaurant = async( req: any, res:Response ) => {

    const { id } = getIdUser( req );

    const name = req.header('branchName');

    try{
        const branch = await Branch.findOne({
            where:{
                idOwner: id,
                branchName: name
            }

        })    

        await branch?.update( { state:false } );


        return res.status(200).json({
            branch
        })  
    } catch ( error ){
      
        console.log( error );
        
        return res.status(400).json({
            msg: 'Talk to the admin'
        })
    }

}