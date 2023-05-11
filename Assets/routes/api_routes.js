const router = require('express').Router();
const fs = require ("fs");

// Defines the get request to this routes end point '/api/notes'
router.get('/api/notes', async (req, res) => {
  const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
  res.json(dbJson);
});