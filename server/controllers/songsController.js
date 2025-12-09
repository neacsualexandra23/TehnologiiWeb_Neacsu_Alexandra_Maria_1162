import Song from "../models/Song.js";
import SearchHistory from "../models/SearchHistory.js";
import { searchTracks } from "../services/spotifyService.js";

// ------------------------------------
// 🔍 1. Search Spotify + Save History
// ------------------------------------
export const searchSpotify = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query || query.trim() === "") {
      return res.status(400).json({ error: "Query string is required" });
    }

    // Save search query in history
    await SearchHistory.create({ query });

    // Search on Spotify
    const results = await searchTracks(query);

    res.json(results);

  } catch (err) {
    console.error("❌ Spotify search controller error:", err.response?.data || err.message);
    res.status(500).json({ error: "Spotify search failed" });
  }
};

// ------------------------------------
// 💾 2. Save Song in Database
// ------------------------------------
export const saveSong = async (req, res) => {
  try {
    const { spotifyId, title, artist, album, previewUrl, imageUrl } = req.body;

    if (!spotifyId || !title || !artist) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Check if song already exists
    let existing = await Song.findOne({ where: { spotifyId } });

    if (existing) {
      return res.json(existing); // return already saved song
    }

    const song = await Song.create({
      spotifyId,
      title,
      artist,
      album,
      previewUrl,
      imageUrl,
    });

    res.json(song);

  } catch (err) {
    console.error("❌ Save song error:", err);
    res.status(500).json({ error: "Database error while saving song" });
  }
};

// ------------------------------------
// 📜 3. Get Search History
// ------------------------------------
export const getHistory = async (req, res) => {
  try {
    const history = await SearchHistory.findAll({
      order: [["timestamp", "DESC"]],
    });

    res.json(history);

  } catch (err) {
    console.error("❌ Get history error:", err);
    res.status(500).json({ error: "Could not get history" });
  }
};

// ------------------------------------
// 🗑️ 4. Clear Search History
// ------------------------------------
export const clearHistory = async (req, res) => {
  try {
    await SearchHistory.destroy({ where: {} }); // delete all history entries
    res.json({ message: "History cleared" });

  } catch (err) {
    console.error("❌ Clear history error:", err);
    res.status(500).json({ error: "Could not clear history" });
  }
};

export const markFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const song = await Song.findByPk(id);
    if (!song) return res.status(404).json({ error: "Song not found" });

    song.isFavorite = true;
    await song.save();

    res.json({ message: "Song added to favorites", song });
  } catch (error) {
    console.error("Error marking favorite:", error);
    res.status(500).json({ error: "Failed to mark favorite" });
  }
};



export const unmarkFavorite = async (req, res) => {
  try {
    const { id } = req.params;

    const song = await Song.findByPk(id);
    if (!song) return res.status(404).json({ error: "Song not found" });

    song.isFavorite = false;
    await song.save();

    res.json({ message: "Song removed from favorites", song });
  } catch (error) {
    console.error("Error removing favorite:", error);
    res.status(500).json({ error: "Failed to unmark favorite" });
  }
};

export const getFavorites = async (req, res) => {
  try {
    const favorites = await Song.findAll({ where: { isFavorite: true } });

    res.json(favorites);
  } catch (error) {
    console.error("Error fetching favorites:", error);
    res.status(500).json({ error: "Failed to fetch favorites" });
  }
};