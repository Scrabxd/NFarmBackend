import sequelize, { BulkRecordError } from 'sequelize'
import db from '../db/config'

const Cow = db.define('Cow',{
    id:{
        type:sequelize.NUMBER,
        allowNull:false,
        primaryKey:true
    },
    certificates:{
        type:sequelize.TEXT,
        allowNull:true
    },
    name:{
        type:sequelize.STRING,
        allowNull:false
    },
    breed:{
        type:sequelize.STRING,
        allowNull:false
    },
    weight:{
        type:sequelize.NUMBER,
        allowNull:false
    },
    idRanch:{
        type:sequelize.NUMBER,
        allowNull:false
    }
})


export default Cow;