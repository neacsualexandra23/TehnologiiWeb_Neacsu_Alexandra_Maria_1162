export default function SongList({ songs, onSave }) {
  return (
    <div>
      {songs.map((track) => (
        <div
          key={track.id}
          style={{
            borderBottom: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
          }}
        >
          <h3>{track.name}</h3>
          <p>{track.artists[0]?.name}</p>
          <button onClick={() => onSave(track)}>Save</button>
        </div>
      ))}
    </div>
  );
}
