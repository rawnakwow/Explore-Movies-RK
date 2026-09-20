import { ArrowUpRight, CalendarDays, ImageOff, Star } from "lucide-react";

const MovieCard = ({ movie, onDetails }) => {
  const image = movie.image?.medium || movie.image?.original;
  const year = movie.premiered ? movie.premiered.slice(0, 4) : "N/A";
  const rating = movie.rating?.average ?? "N/A";
  const genre = movie.genres?.[0] || "Show";

  return (
    <article className="group relative overflow-hidden rounded-[1.45rem] border border-white/[0.07] bg-[#111117] shadow-[0_18px_50px_rgba(0,0,0,.25)] transition duration-300 hover:-translate-y-1.5 hover:border-violet-400/25 hover:shadow-[0_24px_70px_rgba(76,29,149,.18)]">
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-900">
        {image ? (
          <img
            src={image}
            alt={`${movie.name} poster`}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
          />
        ) : (
          <div className="grid h-full place-items-center bg-gradient-to-br from-violet-950/70 to-zinc-950 text-zinc-600">
            <div className="text-center">
              <ImageOff className="mx-auto mb-2" />
              <span className="text-xs">No poster</span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b10] via-transparent to-transparent opacity-90" />

        <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white/80 backdrop-blur-md">
          {genre}
        </div>

        <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full border border-amber-300/15 bg-black/55 px-2.5 py-1 text-xs font-bold text-amber-300 backdrop-blur-md">
          <Star size={12} className="fill-amber-300" /> {rating}
        </div>
      </div>

      <div className="relative -mt-10 p-4 pt-0 sm:p-5 sm:pt-0">
        <div className="rounded-2xl border border-white/[0.06] bg-[#111117]/90 p-4 shadow-xl shadow-black/20 backdrop-blur-xl">
          <h3 className="line-clamp-1 text-base font-bold tracking-tight text-white sm:text-lg">{movie.name}</h3>
          <div className="mt-2 flex items-center justify-between gap-3 text-xs text-zinc-500 sm:text-sm">
            <span className="flex items-center gap-1.5">
              <CalendarDays size={14} className="text-violet-400" /> {year}
            </span>
            <span className="truncate">{movie.language || "Unknown"}</span>
          </div>

          <button
            type="button"
            onClick={() => onDetails(movie)}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-sm font-bold text-violet-200 transition hover:border-violet-400/35 hover:bg-violet-500/20 hover:text-white"
          >
            See Details <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
