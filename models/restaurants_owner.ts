import sequelize from 'sequelize'
import db from '../db/config'

const Restaurant = db.define('Restaurant_owner',{
    id:{
        type:sequelize.STRING,
        primaryKey:true,
        allowNull:false
    },
    rfc:{
        type:sequelize.STRING,
        allowNull:false
    }
})


export default Restaurant