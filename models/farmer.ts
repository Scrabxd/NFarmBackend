import sequelize from 'sequelize'
import db from '../db/config'
import User from './User';


const Farmer = db.define('Farmer',{
    id:{
        type:sequelize.NUMBER,
        primaryKey:true
    },
    rfc:{
        type:sequelize.STRING,
        allowNull:false
    },
    country_Exportation:{
        type:sequelize.STRING,
        allowNull:false
    },
    credential_Exportation:{
        type:sequelize.STRING,
        allowNull:false
    }
    
})

Farmer.hasOne(User,{
    foreignKey: 'id'
})


export default Farmer;