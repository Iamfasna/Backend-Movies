const express = require('express');
const app = express();
const moviesRouter = require('./routes/movies');
const cors = require('cors');

app.use(express.json());

app.use(cors({
  origin: "*",
  methods: ["GET", "POST"],
  credentials: true
}));

app.use('/', moviesRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
