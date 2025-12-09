import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import sequelize from "./db.js";
import songsRoutes from "./routes/songs.js";


dotenv.config();
console.log("Loaded ENV:", process.env.SPOTIFY_CLIENT_ID, process.env.SPOTIFY_CLIENT_SECRET);


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/songs", songsRoutes);

app.get("/", (req, res) => {
  res.json({ message: "Songs API is running on PORT 3000" });
});

// Sync DB + Start Server
sequelize
  .sync()
  .then(() => {
    console.log("Database synchronized.");
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Database sync error:", err));
