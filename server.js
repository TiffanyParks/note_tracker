// Import Express.js
const express = require('express');
// Import built-in Node.js package 'path' to resolve path of files that are located on the server
const path = require('path');
const api = require('./routes/api_routes');
const fs = require('fs');
// const html_routes = require('./Assets/routes/html_routes')
// const api_routes = require('./Assets/routes/api_routes')

// Initialize an instance of Express.js
const app = express();

// Specify on which port the Express.js server will run
const PORT = 3001;

const getNotes = () => {
  const notes = fs.readFileSync(path.resolve(__dirname, './db/db.json'), {encoding: 'utf-8'});
return JSON.parse(notes);
};

// Static middleware pointing to the public folder
app.use(express.static("public"));

// Express middleware will always run the operation in the order from top to bottom "order matters"
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(html_routes)
app.use("/", api);

// Create Express.js routes for default '/', '/send' and '/routes' endpoints
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/api/notes', (req, res) => res.json(getNotes()));

app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/notes.html'))
);


app.listen(PORT, () => 
    console.log(`Server running on http://localhost:${PORT}`)
);

