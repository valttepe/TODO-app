import pool from './init'

export async function getTodoListData() {
  const sql = /* SQL */
  `SELECT *
  FROM todo
  ORDER BY progress_state ASC;`
  const [rows] = await pool.promise().query(sql)
  console.log('ROWS', rows)
  return rows;
}

export async function saveTodo(title: string, description: string) {
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

export async function updateTodo(id: number, progressState: boolean) {
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

export async function deleteTodo(id: number) {
  const sql = /* SQL */
  `DELETE FROM todo
  WHERE id = ?`;
  
  const values = [ id ];

  return await pool.promise().query(sql, values); 
}

