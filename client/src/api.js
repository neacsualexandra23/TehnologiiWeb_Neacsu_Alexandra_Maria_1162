const API_BASE = "http://localhost:3001/api";

export async function getSongs() {
  const res = await fetch(`${API_BASE}/songs`);
  return res.json();
}

export async function addSong(song) {
  const res = await fetch(`${API_BASE}/songs`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(song)
  });
  return res.json();
}

export async function deleteSong(id) {
  await fetch(`${API_BASE}/songs/${id}`, {
    method: "DELETE"
  });
}
