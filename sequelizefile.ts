import { Sequelize } from 'sequelize'

import * as dotenv from 'dotenv'
dotenv.config()
export const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: Number(process.env.DB_PORT),
    pool: {
        max: 1,
        min: 1,
        idle: 10000
    }
});