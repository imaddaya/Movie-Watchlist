import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import MediaGrid from "./features/media/components/mediaGrid";
import { useMediaStore } from "./features/media/store/mediaStore";
import WatchlistPage from "./features/watchlist/components/watchlistPage";

function HomePage() {
  const media = useMediaStore((state) => state.media);
  const loading = useMediaStore((state) => state.loading);
  const error = useMediaStore((state) => state.error);
  const fetchPopularMedia = useMediaStore((state) => state.fetchPopularMedia);

  useEffect(() => {
    fetchPopularMedia();
  }, [fetchPopularMedia]);

  return (
    <main>
      <h1>Movie Watchlist</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <MediaGrid media={media} />}
    </main>
  );
}

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/watchlist">Watchlist</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/watchlist" element={<WatchlistPage />} />
      </Routes>
    </>
  );
}

export default App;