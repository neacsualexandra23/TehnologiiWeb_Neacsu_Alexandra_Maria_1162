export default function SavedSongs({ songs, onFavorite, onDelete }) {
  return (
    <div>
      {songs.length === 0 && <p>No songs found.</p>}

      {songs.map((s) => (
        <div
          key={s.id}
          style={{
            borderBottom: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{s.title}</h3>
          <p>{s.artist}</p>

          {/* ❤️ Add / Remove Favorite */}
          <button onClick={() => onFavorite(s.id, s.isFavorite)}>
            {s.isFavorite ? "❤️ Remove Favorite" : "🤍 Add Favorite"}
          </button>

          {/* 🗑 Delete */}
          <button
            onClick={() => onDelete(s.id)}
            style={{ marginLeft: "10px", color: "red" }}
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
}
