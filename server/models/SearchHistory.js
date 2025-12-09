import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const SearchHistory = sequelize.define("SearchHistory", {
  query: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
});

export default SearchHistory;
