import sequelize from 'sequelize'
import db from '../db/config'
import Cow from './cows';


const Ranch = db.define('Ranch',{
    id:{
        type:sequelize.NUMBER,
        primaryKey:true,
        allowNull:false
    },
    city:{
        type:sequelize.STRING,
        allowNull:false
    },
    street:{
        type:sequelize.STRING,
        allowNull:false,
    },
    phoneNumber:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    postalCode:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    country:{
        type:sequelize.STRING,
        allowNull:false
    },
    cowHeads:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    idFarmer:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    ranchName:{
        type:sequelize.STRING,
        allowNull:false
    },
    state:{
        type:sequelize.BOOLEAN,
        allowNull:true
    }
})

Ranch.hasMany(Cow,{
    foreignKey: 'idRanch'
})

Cow.belongsTo(Ranch,{
    foreignKey:'id'
})

export default Ranch;