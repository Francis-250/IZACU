import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import db from "../config/db.js";

export const register = (req, res) => {
  const { username, email, password } = req.body;

  const checkSql = "SELECT * FROM users WHERE email = ? OR username = ?";
  db.query(checkSql, [email, username], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error checking for existing user" });
    }
    if (result.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).json({ error: "Error hashing password" });
      }

      // Insert user into the database
      const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
      db.query(sql, [username, email, hash], (err, result) => {
        if (err) {
          return res.status(500).json({ error: "Error inserting user into database" });
        }
        res.status(201).json({ message: "User registered successfully" });
      });
    });
  });
};

export const login = (req, res) => {
  const { username, password } = req.body;

  const checkSql = "SELECT * FROM users WHERE username = ?";
  db.query(checkSql, [username], (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error checking for user" });
    }
    if (result.length === 0) {
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const user = result[0];

    // Compare password
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ error: "Error comparing passwords" });
      }
      if (!isMatch) {
        return res.status(400).json({ error: "Invalid username or password" });
      }

      // Generate JWT
      const token = jwt.sign({ id: user.id }, "your_jwt_secret", { expiresIn: "1h" });
      res.json({ message: "Login successful", token });
    });
  });
};

export const logout = (req, res) => {
  console.log("Logged Out");
};

export const getUser = (req, res) => {
  const sql = "SELECT * FROM users";
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: "Error fetching users from database" });
    }
    res.status(200).json(result);
  });
};