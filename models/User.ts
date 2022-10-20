import bcrypt, { genSaltSync } from 'bcryptjs';
import sequelize from 'sequelize'
import db from '../db/config'
import Farmer from './farmer';
import Role from './role';

type user = any;

const User = db.define('User',{
    id:{
        type: sequelize.NUMBER,
        primaryKey:true,
    },
    name:{
        type: sequelize.STRING,
        allowNull:false,
    },
    lastName:{
        type: sequelize.STRING,
        allowNull:false
    },
    email:{
        type: sequelize.STRING,
        unique:true,
        allowNull:false
    },
    password: {
        type: sequelize.STRING,
        allowNull:false,
    },
    state:{
        type:sequelize.BOOLEAN,
        allowNull:true
    },
    idRole:{
        type:sequelize.NUMBER,
        allowNull:false
    }
},
{
    hooks:{
        beforeCreate: async(user:user) => {
            if(user.password){
                
                const salt = genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt)
            }
        },
        beforeUpdate: async( user:user )=> {
            if(user.password){
                const salt = genSaltSync();
                user.password = bcrypt.hashSync(user.password, salt)
            }
        },
},
})

// One to one with Role
User.hasOne(Role,{
    foreignKey:'id_role',
})






export default User;

