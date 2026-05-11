import MediaCard from "./mediaCard";

function MediaGrid({ media }) {
  return (
    <section>
      {media.map((item) => (
        <MediaCard key={`${item.media_type}-${item.id}`} item={item} />
      ))}
    </section>
  );
}

export default MediaGrid;