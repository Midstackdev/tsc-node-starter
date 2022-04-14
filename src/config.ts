import dotenv from 'dotenv';

dotenv.config();

const {
  PORT,
  NODE_ENV,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
} = process.env;

export default {
  port: PORT || 5000,
  host: POSTGRES_HOST,
  dbPort: POSTGRES_PORT,
  dbName: NODE_ENV === 'dev' ? POSTGRES_DB : POSTGRES_DB_TEST,
  dbUser: POSTGRES_USER,
  dbPassword: POSTGRES_PASSWORD,
};
