import { createConnection } from "mysql";
export const db = createConnection({
  host: 'localhost',
  user: 'root',
  password:'cdac',
  database: 'projectdb'
})