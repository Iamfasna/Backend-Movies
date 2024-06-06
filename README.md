Movie Manager Web Application

This is a web application built using Node.js, Express.js for the backend, and React.js for the frontend. It interacts with a list of movies stored in a JSON file, providing functionalities to display and manage the movie data.

Features:

View a list of movies with details such as title, year, genre, and banner image.
Search movies by title.
Add movies to favorites.
Remove movies from favorites.
View a list of favorite movies.

Technologies Used:

Backend: Node.js, Express.js
Frontend: React.js
Database: JSON file


Start the backend server:

cd MoviesProject-Backend
node app.js

Start the frontend server:

cd MoviesProject-Frontend-movies
npm start

Access the application in your browser at (https://cinemakaanuu.netlify.app/).

Backend API Endpoints
GET /movies: Get all movies.
GET /search?query=<search_query>: Search movies by title.


Folder Structure:

MoviesProject-backend: Contains backend code.

app.js: Main server file.
movies.json: JSON file containing movie data.
routes/movies.js: Routes for movie-related endpoints.


MoviesProject-frontend-movies: Contains frontend code.

src/components: React components.
src/pages: React pages.
src/context: React context for managing state.
src/style: CSS stylesheets.
