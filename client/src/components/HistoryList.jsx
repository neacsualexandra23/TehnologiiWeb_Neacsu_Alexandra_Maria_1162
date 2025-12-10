export default function HistoryList({ history }) {
  return (
    <div>
      <h3>Search History</h3>

      {history.length === 0 && <p>No searches yet.</p>}

      {history.map((h, i) => (
        <p key={i}>{h.query}</p>
      ))}
    </div>
  );
}
