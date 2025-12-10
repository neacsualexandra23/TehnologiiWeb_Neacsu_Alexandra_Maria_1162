import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SongList from "../components/SongList";
import HistoryList from "../components/HistoryList";
import { searchSongs, saveSong, getHistory } from "../services/api";

export default function Home() {
  const [results, setResults] = useState([]);
  const [history, setHistory] = useState([]);

  async function handleSearch(query) {
    const data = await searchSongs(query);
    setResults(data.tracks.items);

    const h = await getHistory();
    setHistory(h);
  }

  async function handleSave(track) {
    await saveSong({
      spotifyId: track.id,
      title: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      previewUrl: track.preview_url,
      imageUrl: track.album.images[0]?.url
    });

    alert("Song saved!");
  }

  return (
    <div>
      <h1>MusicFavoritesApp</h1>

      <SearchBar onSearch={handleSearch} />

      <HistoryList history={history} />

      <SongList songs={results} onSave={handleSave} />
    </div>
  );
}
