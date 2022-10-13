import bcrypt, { genSaltSync } from 'bcryptjs';
import sequelize from 'sequelize'
import db from '../db/config'

type user = any;


const Usuario = db.define('Usuario',{
    id:{
        type: sequelize.STRING,
        primaryKey:true,
    },
    name:{
        type: sequelize.STRING,
        allowNull:false,

    },
    password: {
        type: sequelize.STRING,
        allowNull:false,

    },
    email:{
        type: sequelize.STRING,
        unique:true,
        allowNull:false

    },
    state:{
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

