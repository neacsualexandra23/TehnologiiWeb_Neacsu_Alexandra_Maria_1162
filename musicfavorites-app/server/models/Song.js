const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Song = sequelize.define("Song", {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false
  },
  album: {
    type: DataTypes.STRING
  },
  externalUrl: {
    type: DataTypes.STRING
  }
});

module.exports = Song;
