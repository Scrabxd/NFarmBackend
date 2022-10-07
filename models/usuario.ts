import { userInfo } from 'os';
import { DataTypes } from 'sequelize'
import db from '../db/config'


const Usuario = db.define('Usuario',{
    nombre:{
        type: DataTypes.STRING
    },
    correo:{
        type: DataTypes.STRING
    },
    first_lastname:{
        type:DataTypes.STRING
    },
    second_lastname:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.BOOLEAN
    }
});

export default Usuario;

