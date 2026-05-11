import { useWatchlistStore } from "../../watchlist/store/watchlistStore";

function MediaCard({ item }) {
  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;
  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
    : null;

  const watchlist = useWatchlistStore((state) => state.watchlist);
  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);
  const removeFromWatchlist = useWatchlistStore(
    (state) => state.removeFromWatchlist
  );

  const isInWatchlist = watchlist.some(
    (mediaItem) =>
      mediaItem.id === item.id && mediaItem.media_type === item.media_type
  );

  function handleWatchlistClick() {
    if (isInWatchlist) {
      removeFromWatchlist(item);
    } else {
      addToWatchlist(item);
    }
  }

  return (
    <article>
      {posterUrl ? (
        <img src={posterUrl} alt={title} />
      ) : (
        <div>No image available</div>
      )}

      <h2>{title}</h2>
      <p>Type: {item.media_type}</p>
      <p>Rating: {item.vote_average}</p>
      <p>Release: {releaseDate || "Unknown"}</p>

      <button onClick={handleWatchlistClick}>
        {isInWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}
      </button>
    </article>
  );
}

export default MediaCard;