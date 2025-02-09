import express from "express";
import cors from "cors";

import { register, login, logout, getUser } from "./controllers/auth.js";

import {
  addMovie,
  deleteMovie,
  updateMovie,
  getMovies,
} from "./controllers/movie.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Auth routes
app.post("/register", register);
app.post("/login", login);
app.post("/logout", logout);
app.get("/user", getUser);

// Movie routes
app.post("/movie", addMovie);
app.get("/movies", getMovies);
app.delete("/movie/:id", deleteMovie);
app.put("/movie/:id", updateMovie);

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
