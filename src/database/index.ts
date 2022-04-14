import { Pool } from 'pg';
import config from '../config';

const pool = new Pool({
  host: config.host,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbName,
  port: parseInt(config.dbPort as string, 10),
  max: 4,
});

pool.on('error', (error: Error) => {
  console.log(error.message);
});

export default pool;
