import { DataTypes } from 'sequelize'
import db from '../db/config'

const Permision = db.define('Permision', {
    permision:{
        type:DataTypes.STRING
    }
})

export default Permision;