import {Request,Response} from 'express'
import Usuario from '../models/usuario';
import bcrypt from 'bcryptjs';
import { generateJWT } from '../helpers/generateJWT';

export const login = async (req:Request, res:Response) => {
    const {email, password} = req.body;


    try {

        // Verify if email exists.
        const user = await Usuario.findOne({
            where:{
                email:email,
            }
        });

        if( !user ) {
            return res.status(400).json({
                msg:" User / Password are not correct "
            })
        }
        // Verify if user is still active in database

        if(!user.state){
            return res.status(400).json({
                msg:'Account deleted'
            })
        }

        // Verify password.

        const validPassword = bcrypt.compareSync(password, user.password)
        if( !validPassword ){
            return res.status(400).json({
                msg:"Password Incorrect"
            })
        }

        // Generate JWT
        const token = await generateJWT(user.id);

        res.json({
            msg:'Login OKIDOKI',
            user,
            token
        })
        
    } catch (error) {
        return res.json({
            msg:' Talk to the admin.'
        })
    }

}