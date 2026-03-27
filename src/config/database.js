import { Sequelize } from "sequelize";
import dotenv from "dotenv";
import initModels from "../models/init-models.js";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME || "healthcare",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "shihab",
  {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
  }
);

const models = initModels(sequelize);

export { sequelize, models };
