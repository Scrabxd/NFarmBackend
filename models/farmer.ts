import sequelize from 'sequelize'
import db from '../db/config'
import Ranch from './ranch';



const Farmer = db.define('Farmer',{
    id:{
        type:sequelize.NUMBER,
        primaryKey:true
    },
    rfc:{
        type:sequelize.STRING,
        allowNull:false
    },
    countryExportation:{
        type:sequelize.STRING,
        allowNull:false
    },
    credentialExportation:{
        type:sequelize.STRING,
        allowNull:false
    }
    
})

Farmer.hasMany(Ranch,{
    foreignKey:'id'
})

Ranch.belongsTo(Farmer,{
    foreignKey:'idFarmer'
})


export default Farmer;