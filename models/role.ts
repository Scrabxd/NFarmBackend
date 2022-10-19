import sequelize from 'sequelize'
import db from '../db/config'


const Role = db.define('Role', {
    id:{
        type:sequelize.STRING,
        primaryKey:true
    },
    slug:{
        type: sequelize.STRING,
        allowNull:false
    }
})




export default Role;