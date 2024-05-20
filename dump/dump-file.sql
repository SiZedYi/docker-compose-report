CREATE DATABASE todo_db;
USE todo_db;

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content VARCHAR(255) NOT NULL,
    priority INT NOT NULL,
    deadline DATE
);

INSERT INTO todos (content, priority, deadline) VALUES
('Finish homework', 1, '2024-05-21'),
('Buy groceries', 2, '2024-05-22'),
('Read new book', 1, '2024-05-30');