
import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const Music = db.define('artist',{
  
  ArtistName: DataTypes.STRING,
  PackageName: DataTypes.STRING,
  ImageURL: DataTypes.STRING,
  ReleaseDate: DataTypes.DATE,
  SampleURL: DataTypes.STRING,
  Price: DataTypes.STRING
  
  
},{
    freezeTableName:true
});

export default Music;

(async()=>{
    await db.sync();
})();