const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./config/database");
const Song = require("./models/Song");

const app = express();
app.use(cors());
app.use(express.json());

// ===================
// GET – toate melodiile
// ===================
app.get("/api/songs", async (req, res) => {
  const songs = await Song.findAll();
  res.json(songs);
});

// ===================
// POST – adăugare melodie
// ===================
app.post("/api/songs", async (req, res) => {
  const { title, artist, album, externalUrl } = req.body;
  try {
    const song = await Song.create({ title, artist, album, externalUrl });
    res.status(201).json(song);
  } catch (e) {
    res.status(500).json({ error: "Eroare la creare melodie" });
  }
});

// ===================
// DELETE – ștergere melodie
// ===================
app.delete("/api/songs/:id", async (req, res) => {
  const { id } = req.params;
  await Song.destroy({ where: { id } });
  res.status(204).end();
});

// ===================
// Start server + sync DB
// ===================
const PORT = process.env.PORT || 3001;

sequelize.sync().then(() => {
  console.log("Database synchronized.");
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
