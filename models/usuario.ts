import bcrypt, { genSaltSync } from 'bcryptjs';
import { type, userInfo } from 'os';
import sequelize from 'sequelize'
import { Hooks } from 'sequelize/types/hooks';
import db from '../db/config'

type user = any;


const Usuario = db.define('Usuario',{
    id:{
        type: sequelize.STRING,
        primaryKey:true,
    },
    nombre:{
        type: sequelize.STRING,
        allowNull:false,

    },
    contraseña: {
        type: sequelize.STRING,
        allowNull:false,

    },
    correo:{
        type: sequelize.STRING,
        unique:true,
        allowNull:false

    },
    estado:{
        type:sequelize.BOOLEAN
    },
    
},
{
    hooks:{
        beforeCreate: async(user:user) => {
            if(user.contraseña){
                const salt = genSaltSync();
                user.contraseña = bcrypt.hashSync(user.contraseña, salt)
            }
        }
    }
})




export default Usuario;

