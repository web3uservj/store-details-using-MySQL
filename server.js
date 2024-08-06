const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Create connection to MySQL database
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // use your MySQL username
  password: 'Adhi@2002', // use your MySQL password
  database: 'event_manager'
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// HTML form for input
app.get('/', (req, res) => {
  res.send(`
    <form action="/events" method="post">
      <label for="name">Event Name:</label>
      <input type="text" id="name" name="name"><br>
      <label for="date">Event Date:</label>
      <input type="date" id="date" name="date"><br>
      <label for="description">Event Description:</label>
      <textarea id="description" name="description"></textarea><br>
      <input type="submit" value="Create Event">
    </form>
  `);
});

// Create event
app.post('/events', (req, res) => {
  const { name, date, description } = req.body;
  const sql = 'INSERT INTO events (name, date, description) VALUES (?, ?, ?)';
  db.query(sql, [name, date, description], (err, result) => {
    if (err) throw err;
    res.send('Event added...');
  });
});

// Read all events
app.get('/events', (req, res) => {
  const sql = 'SELECT * FROM events';
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Update event
app.put('/events/:id', (req, res) => {
  const { id } = req.params;
  const { name, date, description } = req.body;
  const sql = 'UPDATE events SET name = ?, date = ?, description = ? WHERE id = ?';
  db.query(sql, [name, date, description, id], (err, result) => {
    if (err) throw err;
    res.send('Event updated...');
  });
});

// Delete event
app.delete('/events/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM events WHERE id = ?';
  db.query(sql, [id], (err, result) => {
    if (err) throw err;
    res.send('Event deleted...');
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
