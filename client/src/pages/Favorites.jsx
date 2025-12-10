import { useEffect, useState } from "react";
import { getFavorites, toggleFavorite } from "../services/api";
import SavedSongs from "../components/SavedSongs";

export default function Favorites() {
  const [songs, setSongs] = useState([]);

  async function load() {
    const data = await getFavorites();  // 🔥 doar favoritele reale
    setSongs(data);
  }

  async function handleFavorite(id, isFavorite) {
    await toggleFavorite(id, isFavorite); // trimitem și starea actuală
    await load(); // reîncarcă doar favoritele active
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Saved Songs</h1>
      <SavedSongs songs={songs} onFavorite={handleFavorite} />
    </div>
  );
}
