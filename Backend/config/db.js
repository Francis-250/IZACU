import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "izacu",
});

if (db) {
  console.log("database connected");
} else {
  console.log("database connection error");
}

export default db;
