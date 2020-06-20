import { createPool, Pool } from 'mysql2/promise';

export async function connect(): Promise<Pool> {
  return createPool({
    host: 'localhost',
    user: 'root',
    port: 6603,
    database: 'node_mysql_ts',
    connectionLimit: 10,
    password: "testpassword",
  });
}
