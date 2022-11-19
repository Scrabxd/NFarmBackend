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
    images:{
        type:sequelize.STRING,
        allowNull:false
    }
})


export default cowImage;