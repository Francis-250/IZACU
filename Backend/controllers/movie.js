import db from "../config/db.js";
import multer from "multer";
import path from "path";

export const addMovie = (req, res) => {
  const {
    title,
    video_url,
    thumbnail_url,
    duration,
    category,
    translator,
    country,
    status,
    release_date,
    description,
    featured,
    season,
    episode,
  } = req.body;

  const sql =
    "INSERT INTO movies(title, video_url, thumbnail_url, duration, category, translator, country, status, release_date, description, featured, season, episode) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)";
  db.query(
    sql,
    [
      title,
      video_url,
      thumbnail_url,
      duration,
      category,
      translator,
      country,
      status,
      release_date,
      description,
      featured,
      season,
      episode,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Movie created");
    }
  );
};

export const getMovies = (req, res) => {
  const sql = "SELECT * FROM movies";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    }
    return res.json(result);
  });
};

export const deleteMovie = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM movies WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log("Movie Deleted");
  });
};

export const updateMovie = (req, res) => {
  const { id } = req.params;
  const { title, description, release_year, category_id, narrator_id } =
    req.body;
  const sql =
    "UPDATE movies SET title = ?, description = ?, release_year = ?, category_id = ?, narrator_id = ? WHERE id = ?";
  db.query(
    sql,
    [title, description, release_year, category_id, narrator_id, id],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log("Movie Updated");
    }
  );
};
