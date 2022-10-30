import sequelize from 'sequelize'
import db from '../db/config'


const cowImage = db.define('cowImage',{
    id:{
        type:sequelize.NUMBER,
        allowNull:false,
        primaryKey:true
    },
    idCow:{
        type:sequelize.STRING,
        allowNull:false
    },
    lg:{
        type:sequelize.STRING,
        allowNull:false
    }
})


export default cowImage;