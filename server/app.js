const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); // Thêm dòng này



const app = express();
app.use(cors()); // Và dòng này

const port = 3000;

// Thiết lập kết nối đến MySQL
const pool = mysql
  .createPool({
    host: "localhost",
    user: "root",
    password: "sapassword", // Để trống nếu không có mật khẩu
    database: "todo_db",
    port: 3305, // Thêm dòng này
  })
  .promise();

app.use(bodyParser.json());

// Lấy danh sách todos
app.get('/api/todos', async (req, res) => {
    try {
        const [rows, fields] = await pool.query('SELECT * FROM todos');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Thêm mới todo
app.post('/api/todos', async (req, res) => {
    const { content, priority, deadline } = req.body;
    try {
        const [result] = await pool.query('INSERT INTO todos (content, priority, deadline) VALUES (?, ?, ?)', [content, priority, deadline]);
        res.json({ id: result.insertId, content, priority, deadline });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Sửa todo
app.put('/api/todos/:id', async (req, res) => {
        const { id } = req.params;
        const { content, priority, deadline } = req.body;
        try {
            await pool.query('UPDATE todos SET content = ?, priority = ?, deadline = ? WHERE id = ?', [content, priority, deadline, id]);
            res.json({ id, content, priority, deadline });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    });

// Xóa todo
app.delete('/api/todos/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await pool.query('DELETE FROM todos WHERE id = ?', [id]);
        res.json({ message: 'Todo deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
