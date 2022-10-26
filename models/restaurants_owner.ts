import sequelize from 'sequelize'
import db from '../db/config'
import Branch from './branch'

const Restaurant_owner = db.define('Restaurant_owner',{
    id:{
        type:sequelize.STRING,
        primaryKey:true,
        allowNull:false
    },
    rfc:{
        type:sequelize.STRING,
        allowNull:false
    },
    restaurantName:{
        type:sequelize.STRING,
        allowNull:false
    }
})

Restaurant_owner.hasMany(Branch,{
    foreignKey:'id'
})
//One to one with restaurant
Branch.belongsTo(Restaurant_owner,{
    foreignKey:'idOwner'
})


export default Restaurant_owner