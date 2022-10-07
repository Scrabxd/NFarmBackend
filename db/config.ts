import { Sequelize } from "sequelize";



const db = new Sequelize('NFarm', 'scrab' , 'root', {
    host: 'localhost',
    dialect: 'postgres',
})


export default db;