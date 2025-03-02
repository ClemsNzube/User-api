import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: false,
  logging: true,
  entities: ["src/entities/*.ts"],
});

AppDataSource.initialize()
  .then(() => console.log("Database connected"))
  .catch((err) => console.error("DB connection error:", err));
