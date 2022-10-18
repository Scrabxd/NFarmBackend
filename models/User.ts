import bcrypt, { genSaltSync } from 'bcryptjs';
import sequelize from 'sequelize'
import db from '../db/config'

type user = any;

const User = db.define('User',{
    id:{
        type: sequelize.INTEGER,
        primaryKey:true,
    },
    name:{
        type: sequelize.STRING,
        allowNull:false,
    },
    last_name:{
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
    
}
})




export default User;

