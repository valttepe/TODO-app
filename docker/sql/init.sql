-- Create a new database (if it doesn't exist)
CREATE DATABASE IF NOT EXISTS local_todo_app;

-- Switch to the newly created database
USE local_todo_app;

-- Create the "todo" table
CREATE TABLE IF NOT EXISTS todo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    progress_state BOOLEAN NOT NULL
);