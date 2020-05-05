import { Sequelize, Model, DataTypes }  from 'sequelize'
import { sequelize } from '../../sequelizefile'
import { config } from 'dotenv/types';

export class Tecnico extends Model {
    public nome: string;
    public email: string
} 


Tecnico.init({
    nome : {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'cr_tecnicos',
    sequelize: sequelize
})

Tecnico.sync({ 
    force: true 
}).then(() => console.log("cr_tecnicos table created"));

