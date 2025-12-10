import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Saved from "./pages/Saved";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#222", color: "white" }}>
        <Link 
          to="/" 
          style={{ marginRight: "15px", color: "white", textDecoration: "none" }}
        >
          Home
        </Link>

        <Link 
          to="/saved" 
          style={{ marginRight: "15px", color: "white", textDecoration: "none" }}
        >
          Saved
        </Link>

        <Link 
          to="/favorites" 
          style={{ color: "white", textDecoration: "none" }}
        >
          Favorites
        </Link>
      </nav>

      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
