import pool from './init'

async function getTodoListData(progressState: boolean) {
  const sql = /* SQL */
    `SELECT *
  FROM todo
  WHERE progress_state = ?;`

  const values = [progressState]
  const [rows] = await pool.promise().query(sql, values);
  console.log('ROWS', rows);
  return rows;
}

async function saveTodo(title: string, description: string) {
  const sql = /* SQL */
    `INSERT INTO todo (title, description, progress_state)
  VALUES (?, ?, ?)`;

  const values = [
    title,
    description,
    false
  ];

  return await pool.promise().query(sql, values);

}

async function updateTodo(id: number, progressState: boolean) {
  const sql = /* SQL */
    `UPDATE todo 
    SET progress_state = ?
    WHERE id = ?`;

  const values = [
    progressState,
    id
  ]
  return await pool.promise().query(sql, values);
}

async function deleteTodo(id: number) {
  const sql = /* SQL */
    `DELETE FROM todo
  WHERE id = ?`;

  const values = [id];

  return await pool.promise().query(sql, values);
}

export default {
  getTodoListData,
  saveTodo,
  updateTodo,
  deleteTodo
}

