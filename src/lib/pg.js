import pg from "pg";
import { config } from "../common/config/index.js";
import { ResData } from "../common/resData.js";

const Pool = pg.Pool;

const pool = new Pool({
  host: config.dbHost,
  database: config.dbName,
  password: config.dbPassword,
  port: config.dbPort,
  user: config.dbUser,
});

export class Postgres {
  async fetch(SQL, ...args) {
    const clien = await pool.connect();
    try {
      const {
        rows: [row],
      } = await clien.query(SQL, args);
      return row;
    }catch(err){
      throw new ResData(err.message || "Erron on postgresql", 500, null, err)
    }
     finally {
      clien.release();
    }
  }

  async fetchAll(SQL, ...args) {
    const clien = await pool.connect();
    try {
      const { rows } = await clien.query(SQL, args);
      return rows;
    }
    catch(err){
      throw new ResData(err.message || "Erron on postgresql", 500, null, err)
    } finally {
      clien.release();
    }
  }
}
