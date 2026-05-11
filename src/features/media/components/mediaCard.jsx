import { useWatchlistStore } from "../../watchlist/store/watchlistStore";

function MediaCard({ item }) {
  const title = item.title || item.name;
  const releaseDate = item.release_date || item.first_air_date;
  const posterUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w342${item.poster_path}`
    : null;

  const addToWatchlist = useWatchlistStore((state) => state.addToWatchlist);

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

      <button onClick={() => addToWatchlist(item)}>Add to Watchlist</button>
    </article>
  );
}

export default MediaCard;