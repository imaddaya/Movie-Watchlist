import MediaGrid from "../../media/components/mediaGrid";
import { useWatchlistStore } from "../store/watchlistStore";

function WatchlistPage() {
  const watchlist = useWatchlistStore((state) => state.watchlist);

  return (
    <main>
      <h1>My Watchlist</h1>

      {watchlist.length === 0 ? (
        <p>Your watchlist is empty.</p>
      ) : (
        <MediaGrid media={watchlist} />
      )}
    </main>
  );
}

export default WatchlistPage;