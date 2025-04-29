const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DATABASE || "explorer_app",
});

// Users and places data
const users = [
  ["alice@example.com", "Alice"],
  ["bob@example.com", "Bob"],
  ["charlie@example.com", "Charlie"],
];

const places = [
  ["Beach Paradise", "A sunny beach with clear waters", 1],
  ["Mountain Retreat", "Cozy cabins and hiking trails", 2],
  ["City Lights", "Explore the downtown nightlife", 3],
];

// Seed function
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB. Seeding...");

  // Clear previous data
  connection.query("DELETE FROM places");
  connection.query("DELETE FROM users");

  // Insert users
  const insertUsers = `INSERT INTO users (email, name) VALUES ?`;
  connection.query(insertUsers, [users], (err) => {
    if (err) throw err;
    console.log("✅ Users seeded.");

    // Insert places
    const insertPlaces = `INSERT INTO places (name, description, created_by) VALUES ?`;
    connection.query(insertPlaces, [places], (err) => {
      if (err) throw err;
      console.log("✅ Places seeded.");
      connection.end();
    });
  });
});
