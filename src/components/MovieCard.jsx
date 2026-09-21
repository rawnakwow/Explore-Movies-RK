import { CalendarDays, Eye, Heart, ImageOff, Star } from "lucide-react";
import useFavorites from "../context/useFavorites";

const MovieCard = ({ movie, onDetails }) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const image = movie.image?.medium || movie.image?.original;
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";
  const saved = isFavorite(movie.id);

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/75 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-violet-400/35 hover:shadow-violet-950/30">
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-900">
        {image ? (
          <img
            src={image}
            alt={`${movie.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-zinc-500">
            <div className="text-center">
              <ImageOff className="mx-auto mb-2" aria-hidden="true" />
              <span className="text-sm">No poster</span>
            </div>
          </div>
        )}

        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/55 to-transparent" />

        <button
          type="button"
          onClick={() => toggleFavorite(movie)}
          aria-label={saved ? `Remove ${movie.name} from favorites` : `Add ${movie.name} to favorites`}
          aria-pressed={saved}
          className={`absolute right-3 top-3 grid h-11 w-11 place-items-center rounded-xl border backdrop-blur transition ${
            saved
              ? "border-pink-400/50 bg-pink-500 text-white"
              : "border-white/15 bg-black/65 text-white hover:bg-violet-600"
          }`}
        >
          <Heart size={19} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
        </button>
      </div>

      <div className="p-4">
        {movie.genres?.[0] ? (
          <p className="mb-1 text-xs font-bold uppercase tracking-[0.14em] text-violet-300">
            {movie.genres[0]}
          </p>
        ) : null}

        <h3 className="line-clamp-1 text-lg font-bold text-white">{movie.name}</h3>

        <div className="mt-2 flex items-center justify-between gap-3 text-sm text-zinc-300">
          <span className="flex items-center gap-1.5" aria-label={`Rating ${rating}`}>
            <Star size={15} className="text-amber-300" aria-hidden="true" />
            {rating}
          </span>
          <span className="flex items-center gap-1.5" aria-label={`Premiere year ${year}`}>
            <CalendarDays size={15} aria-hidden="true" />
            {year}
          </span>
        </div>

        <button
          type="button"
          onClick={() => onDetails(movie)}
          className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-violet-500 active:translate-y-px"
        >
          <Eye size={17} aria-hidden="true" />
          See details
        </button>
      </div>
    </article>
  );
};

export default MovieCard;
