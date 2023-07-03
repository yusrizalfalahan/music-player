
import {Sequelize} from "sequelize";

const db = new Sequelize('dbmusic','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

export default db;