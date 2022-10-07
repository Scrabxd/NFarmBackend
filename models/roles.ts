import { DataTypes } from 'sequelize'
import db from '../db/config'


const Role = db.define('Role',{
    slug:{
        type: DataTypes.TEXT,
    },
    role:{
        type:DataTypes.CHAR
    }

})

export default Role;