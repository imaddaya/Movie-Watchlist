import { useEffect } from "react";
import MediaGrid from "./features/media/components/mediaGrid";
import { useMediaStore } from "./features/media/store/mediaStore";

function App() {
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

export default App;