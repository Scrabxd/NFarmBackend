import sequelize from 'sequelize'
import db from '../db/config'



const Branch = db.define('Branch',{
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
    outsideNumber:{
        type:sequelize.STRING,
        allowNull:false
    },
    phoneNumber:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    postalCode:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    branchName:{
        type:sequelize.STRING,
        allowNull:false
    },
    country:{
        type:sequelize.STRING,
        allowNull:false
    },
    idOwner:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    state:{
        type:sequelize.BOOLEAN,
        allowNull:true
    }
    
})


export default Branch;