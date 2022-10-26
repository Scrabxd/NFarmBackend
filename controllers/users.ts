import { Request, Response } from "express";
import { getIdUser, idGen } from "../helpers";
import Farmer from "../models/farmer";
import Restaurant from "../models/restaurants_owner";
import User from "../models/User";


export const getUsers = async(req: Request, res: Response) => {

    const user = await User.findAll()

    res.json({user})
}

export const getUser = async(req: Request, res: Response) => {

    const { id } = getIdUser(req)

    const user = await User.findByPk( id )

    if( !user ){
        return res.status(404).json({
            msg: `No User with the id: ${id }`
        })
    }
    
    res.json({
        user
    })
}


export const postUser = async(req: Request, res: Response) => {
    
    const { 
        name,
        lastName,
        rfc,
        countryExportation,
        credentialExportation,
        email,
        password,
        idRole,   
        restaurantName
    } = req.body
    
    // 1 = Farmer
    // 2 = Restaurant Owner

    try {
        const { idGenerated } = idGen();
        const userData = {id:idGenerated, name, lastName,email,password,idRole }
        
            const emailExists = await User.findOne({
                where:{
                    email:email,
                }
            });
            
            if(emailExists){
                return res.status(400).json({
                    msg: `Existing User with email: ${email}`
                })
            }

            const createUser = User.build(userData);
            await createUser.save();

        if(idRole === 1){
            
        
            const farmerData = {id:idGenerated, rfc,countryExportation,credentialExportation}
    
            const createFarmer = Farmer.build(farmerData);
            await createFarmer.save();
     

            return res.json( {createUser, createFarmer} )
        }else{
            const Restaurant_ownersData = { id:idGenerated, rfc, restaurantName} ;

            const createRestaurant_owner = Restaurant.build(Restaurant_ownersData);
            await createRestaurant_owner.save();

            return res.json( {createUser, createRestaurant_owner } )
            
        
        }

    } catch (error) {
        console.log(error)
        res.status(500).json({
            msg: 'Talk to  an admin'
        })
    }
    
}
    
export const putUser = async (req: Request, res: Response) => {
    
    const { id } = getIdUser( req );
    const { body } = req;

    try {

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                msg: `No existe usuario con id: ${ id }`
            });
        }
        if( user.idRole === 1){

            const farmer = await Farmer.findByPk(id);

            await user.update( body);
            await farmer?.update( body );
            return res.json( { 
                user, 
                farmer 
            } )
        }else{
            const restaurant = await Restaurant.findByPk(id);
            
            await user.update(body);
            await restaurant?.update(body);

            return res.json({
                user,
                restaurant
            })
        }



    } catch (error) {
        res.status(500).json({
            msg: 'Talk to an admin'
        })
    }
}


export const delUser = async (req: any, res: Response) => {


    const { id } = getIdUser(req);

        const user = await User.findByPk(id);

        if(!user){
            return res.status(404).json({
                msg: `No existe usuario con id: ${ id }`
            });
        }

        await user.update( { state:false } ); 
        const userAuth = req.user;  

        // await usuario.destroy(); borrar permanentemente registros.
        
        res.json ( {
            user,
            userAuth,
        })
        



}



