import { useEffect, useState } from "react";
import { getAllSaved, toggleFavorite, deleteSong } from "../services/api";
import SavedSongs from "../components/SavedSongs";

export default function Saved() {
  const [songs, setSongs] = useState([]);

  async function load() {
    const data = await getAllSaved();
    setSongs(data);
  }

  async function handleFavorite(id, isFavorite) {
    await toggleFavorite(id, isFavorite);
    await load();
  }

  async function handleDelete(id) {
    await deleteSong(id);   // 🔥 ȘTERGE DIN BAZA DE DATE
    await load();           // reîncarcă lista
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <h1>Saved Songs</h1>
      <SavedSongs 
        songs={songs} 
        onFavorite={handleFavorite}
        onDelete={handleDelete}  // 🔥 trimitem funcția în componentă
      />
    </div>
  );
}
