import {
  Sequelize
} from "sequelize";
import db from "../config/Database.js";

const {
  DataTypes
} = Sequelize;

const Music = db.define('artist', {

  ArtistName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  PackageName: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ImageURL: {
    type: DataTypes.STRING,
    allowNull: true
  },
  ReleaseDate: {
    type: DataTypes.DATE,
    allowNull: true
  },
  SampleURL: {
    type: DataTypes.STRING,
    allowNull: true
  },
  Price: {
    type: DataTypes.STRING,
    allowNull: true
  }


}, {
  freezeTableName: true
});

export default Music;

(async () => {
  await db.sync();
})();