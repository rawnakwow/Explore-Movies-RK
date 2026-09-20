import { CalendarDays, Clock3, ExternalLink, Star, X } from "lucide-react";
import { useEffect } from "react";

const stripHtml = (value) => {
  if (!value) return "No overview is available for this title.";
  return value.replace(/<[^>]*>/g, "");
};

const MovieModal = ({ movie, onClose }) => {
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const image = movie.image?.original || movie.image?.medium;
  const rating = movie.rating?.average ?? "N/A";
  const releaseDate = movie.premiered || "Unknown";

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="modal-scroll relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-[#101015] shadow-[0_35px_120px_rgba(0,0,0,.72)]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close movie details"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-black/55 text-white backdrop-blur-lg hover:rotate-90 hover:bg-black/80"
        >
          <X size={19} />
        </button>

        <div className="grid md:grid-cols-[330px_1fr]">
          <div className="relative min-h-80 overflow-hidden bg-zinc-950 md:min-h-[560px]">
            {image ? (
              <img src={image} alt={`${movie.name} poster`} className="h-full w-full object-cover" />
            ) : (
              <div className="grid h-full min-h-80 place-items-center bg-gradient-to-br from-violet-950/70 to-zinc-950 text-zinc-600">No image available</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-[#101015] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#101015]/45" />
          </div>

          <div className="relative p-6 sm:p-8 lg:p-10">
            <p className="mb-3 text-[11px] font-black uppercase tracking-[0.24em] text-violet-400">Movie Details</p>
            <h2 className="pr-10 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">{movie.name}</h2>

            <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-300 sm:text-sm">
              <span className="flex items-center gap-1.5 rounded-full border border-amber-300/10 bg-amber-400/[0.07] px-3 py-1.5 text-amber-200">
                <Star size={14} className="fill-amber-300 text-amber-300" /> {rating}
              </span>
              <span className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1.5">
                <CalendarDays size={14} className="text-violet-300" /> {releaseDate}
              </span>
              {movie.runtime && (
                <span className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1.5">
                  <Clock3 size={14} className="text-violet-300" /> {movie.runtime} min
                </span>
              )}
            </div>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-300">Overview</h3>
              <p className="mt-3 leading-7 text-zinc-400">{stripHtml(movie.summary)}</p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                ["Genres", movie.genres?.length ? movie.genres.join(", ") : "N/A"],
                ["Language", movie.language || "N/A"],
                ["Status", movie.status || "N/A"],
                ["Network", movie.network?.name || movie.webChannel?.name || "N/A"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-zinc-600">{label}</p>
                  <p className="mt-1.5 text-sm font-semibold text-zinc-200">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-violet-950/30 hover:-translate-y-0.5"
              >
                Close
              </button>
              {movie.officialSite && (
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-bold text-zinc-200 hover:bg-white/[0.07]"
                >
                  Official Site <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
