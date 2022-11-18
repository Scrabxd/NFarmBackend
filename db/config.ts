import { Sequelize } from "sequelize";



const db = new Sequelize(process.env.PGDATABASE, process.env.PGUSER ,process.env.PGPASSWORD, {
    host: process.env.PGHOST,
    dialect: 'postgres',
    logging:false,
    port: process.env.PGPORT || 5959


})


export default db;