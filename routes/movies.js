const express = require('express');
const router = express.Router();
const fs = require('fs').promises;
const path = require('path');

const moviesFilePath = path.join(__dirname, '../movies.json');

router.get('/movies', async (req, res) => {
  try {
    const data = await fs.readFile(moviesFilePath, 'utf8');
    const movies = JSON.parse(data);
    res.json(movies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error fetching movies' });
  }
});


router.get('/search', async (req, res) => {
  const { query } = req.query;
  console.log('Search query:', query);
  if (!query) {
    return res.status(400).json({ error: 'Query parameter is required' });
  }

  try {
    const data = await fs.readFile(moviesFilePath, 'utf8');
    const movies = JSON.parse(data);
    const filteredMovies = movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    res.json(filteredMovies);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error searching movies' });
  }
});


module.exports = router;
