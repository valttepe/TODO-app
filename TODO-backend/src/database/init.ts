import mysql from 'mysql2';


const pool = mysql.createPool({
  host: 'mariadb',
  user: 'todo_user',
  password: 'todo_password',
  database: 'local_todo_app',
  waitForConnections: true,
  connectionLimit: 10, // Adjust this value based on your application's needs
  queueLimit: 0, // 0 means no limit to the number of queued connections
})


export default pool;