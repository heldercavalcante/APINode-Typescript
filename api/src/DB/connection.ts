import { PoolOptions } from 'mysql2';
import { createPool, Pool, PoolConnection } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const config: PoolOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
};


const connection: Pool = createPool(config);


connection.getConnection()
  .then((connection: PoolConnection) => {
    console.log('Database connection established successfully!');
    connection.release();
  })
  .catch((error) => {
    console.error('Unable to establish database connection:', error);
  });
export default connection;