import { CalendarDays, Clock3, Heart, Play, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useFavorites from "../context/useFavorites";

const stripHtml = (value) => {
  if (!value) return "No overview is available for this title.";
  return value.replace(/<[^>]*>/g, "");
};

const trapFocus = (event) => {
  if (event.key !== "Tab") return;

  const focusable = Array.from(
    event.currentTarget.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => !element.hasAttribute("aria-hidden"));

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
};

const MovieModal = ({ movie, onClose }) => {
  const [showWatchOptions, setShowWatchOptions] = useState(false);
  const closeButtonRef = useRef(null);
  const watchCloseRef = useRef(null);
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(movie.id);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key !== "Escape") return;

      if (showWatchOptions) {
        setShowWatchOptions(false);
      } else {
        onClose();
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = "";
    };
  }, [onClose, showWatchOptions]);

  useEffect(() => {
    if (showWatchOptions) {
      watchCloseRef.current?.focus();
    } else {
      closeButtonRef.current?.focus();
    }
  }, [showWatchOptions]);

  const image = movie.image?.original || movie.image?.medium;
  const rating = movie.rating?.average ?? "N/A";
  const releaseDate = movie.premiered || "Unknown";

  const streamingPlatforms = [
    {
      name: "Netflix",
      icon: "N",
      url: `https://www.netflix.com/search?q=${encodeURIComponent(movie.name)}`,
    },
    {
      name: "Prime Video",
      icon: "P",
      url: `https://www.primevideo.com/search/ref=atv_nb_sr?phrase=${encodeURIComponent(movie.name)}`,
    },
    {
      name: "Disney+",
      icon: "D+",
      url: `https://www.disneyplus.com/search?q=${encodeURIComponent(movie.name)}`,
    },
    {
      name: "CBS TV",
      icon: "CBS",
      url: "https://www.cbs.com/shows/",
    },
  ];

  return (
    <>
      <div
        className="fixed inset-0 z-50 grid place-items-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) onClose();
        }}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="movie-dialog-title"
          aria-describedby="movie-dialog-summary"
          onKeyDown={trapFocus}
          className="modal-scroll relative max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/50"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close movie details"
            className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center rounded-xl bg-black/70 text-white backdrop-blur hover:bg-black"
          >
            <X size={20} aria-hidden="true" />
          </button>

          <div className="grid md:grid-cols-[280px_1fr]">
            <div className="min-h-80 bg-zinc-950 md:min-h-[520px]">
              {image ? (
                <img
                  src={image}
                  alt={`${movie.name} poster`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="grid h-full min-h-80 place-items-center px-6 text-center text-zinc-400">
                  No image available
                </div>
              )}
            </div>

            <div className="p-6 sm:p-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em] text-violet-300">
                Movie details
              </p>

              <h2 id="movie-dialog-title" className="pr-12 text-3xl font-black tracking-tight text-white sm:text-4xl">
                {movie.name}
              </h2>

              <div className="mt-5 flex flex-wrap gap-2 text-sm text-zinc-200">
                <span className="flex min-h-9 items-center gap-1.5 rounded-full bg-white/[0.06] px-3">
                  <Star size={16} className="text-amber-300" aria-hidden="true" />
                  {rating}
                </span>
                <span className="flex min-h-9 items-center gap-1.5 rounded-full bg-white/[0.06] px-3">
                  <CalendarDays size={16} aria-hidden="true" />
                  {releaseDate}
                </span>
                {movie.runtime ? (
                  <span className="flex min-h-9 items-center gap-1.5 rounded-full bg-white/[0.06] px-3">
                    <Clock3 size={16} aria-hidden="true" />
                    {movie.runtime} min
                  </span>
                ) : null}
              </div>

              <div className="mt-6">
                <h3 className="font-bold text-white">Overview</h3>
                <p id="movie-dialog-summary" className="mt-2 leading-7 text-zinc-300">
                  {stripHtml(movie.summary)}
                </p>
              </div>

              <dl className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-black/15 p-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">Genres</dt>
                  <dd className="mt-1 text-sm text-zinc-100">
                    {movie.genres?.length ? movie.genres.join(", ") : "N/A"}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">Language</dt>
                  <dd className="mt-1 text-sm text-zinc-100">{movie.language || "N/A"}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">Status</dt>
                  <dd className="mt-1 text-sm text-zinc-100">{movie.status || "N/A"}</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold uppercase tracking-wider text-zinc-400">Network</dt>
                  <dd className="mt-1 text-sm text-zinc-100">
                    {movie.network?.name || movie.webChannel?.name || "N/A"}
                  </dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={() => setShowWatchOptions(true)}
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-bold text-white hover:brightness-110"
                >
                  <Play size={17} aria-hidden="true" />
                  Find where to watch
                </button>

                <button
                  type="button"
                  onClick={() => toggleFavorite(movie)}
                  aria-pressed={saved}
                  className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border px-5 py-2.5 text-sm font-bold transition ${
                    saved
                      ? "border-pink-400/50 bg-pink-500/15 text-pink-100 hover:bg-pink-500/25"
                      : "border-white/15 text-zinc-100 hover:bg-white/5"
                  }`}
                >
                  <Heart size={17} fill={saved ? "currentColor" : "none"} aria-hidden="true" />
                  {saved ? "Saved" : "Save favorite"}
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="min-h-11 rounded-xl px-5 py-2.5 text-sm font-semibold text-zinc-300 hover:bg-white/5 hover:text-white"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showWatchOptions ? (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/80 p-4 backdrop-blur-sm"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setShowWatchOptions(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="watch-dialog-title"
            onKeyDown={trapFocus}
            className="relative w-full max-w-md rounded-3xl border border-white/10 bg-zinc-900 p-6 shadow-2xl shadow-black/50"
          >
            <button
              ref={watchCloseRef}
              type="button"
              onClick={() => setShowWatchOptions(false)}
              aria-label="Close watch options"
              className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-xl text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <X size={20} aria-hidden="true" />
            </button>

            <h3 id="watch-dialog-title" className="pr-12 text-2xl font-bold text-white">
              Search a streaming platform
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              Open a platform search for <strong className="text-white">{movie.name}</strong>. Availability can vary by region and subscription.
            </p>

            <div className="mt-6 space-y-3">
              {streamingPlatforms.map((platform) => (
                <a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-14 items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-4 text-white hover:border-violet-400/50 hover:bg-violet-600"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid h-9 min-w-9 place-items-center rounded-lg bg-black/25 px-2 text-xs font-black" aria-hidden="true">
                      {platform.icon}
                    </span>
                    <span className="font-semibold">{platform.name}</span>
                  </span>
                  <span className="text-sm text-white/80">Open ↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default MovieModal;
