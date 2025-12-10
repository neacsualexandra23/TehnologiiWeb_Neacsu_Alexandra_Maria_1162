const API_URL = "http://localhost:3000/api/songs";

// 🔍 Search songs on Spotify
export async function searchSongs(query) {
  const res = await fetch(`${API_URL}/spotify/search?q=${query}`);
  return res.json();
}

// 💾 Save a song in DB
export async function saveSong(song) {
  const res = await fetch(`${API_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(song)
  });
  return res.json();
}

// ⭐ Load ALL saved songs (favorite + non-favorite)
export async function getAllSaved() {
  const res = await fetch(`${API_URL}/all`);
  return res.json();
}

// ⭐ Load ONLY favorite songs
export async function getFavorites() {
  const res = await fetch(`${API_URL}/favorites`);
  return res.json();
}

// ❤️ Toggle favorite (add/remove)
export async function toggleFavorite(id, isFavorite) {
  const endpoint = isFavorite ? "unfavorite" : "favorite";

  const res = await fetch(`${API_URL}/${endpoint}/${id}`, {
    method: "PUT"
  });

  return res.json();
}

// 📜 Get search history
export async function getHistory() {
  const res = await fetch(`${API_URL}/history`);
  return res.json();
}


// 🗑 Delete a saved song from DB
export async function deleteSong(id) {
  const res = await fetch(`${API_URL}/delete/${id}`, {
    method: "DELETE"
  });
  return res.json();
}
