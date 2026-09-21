import { RefreshCw, Search, X } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingCards from "../components/LoadingCards";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import PageIntro from "../components/PageIntro";
import { getAllShows, searchShows } from "../services/movie-api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    const keyword = query.trim();

    const timer = window.setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const data = keyword
          ? await searchShows(keyword, controller.signal)
          : await getAllShows(controller.signal);
        setMovies(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Could not load titles right now. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, keyword ? 350 : 0);

    return () => {
      window.clearTimeout(timer);
      controller.abort();
    };
  }, [query, retryKey]);

  const title = query.trim() ? `Results for “${query.trim()}”` : "Popular shows";

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <PageIntro
        eyebrow="Browse & search"
        title="Movie library"
        description="Search by title, compare key details and save anything interesting to your favorites."
      />

      <div className="mx-auto mt-9 max-w-2xl">
        <label htmlFor="movie-search" className="mb-2 block text-sm font-semibold text-zinc-200">
          Search movie or show title
        </label>
        <div className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900 px-4 shadow-xl shadow-black/10 focus-within:border-violet-400/70">
          <Search size={20} className="shrink-0 text-zinc-400" aria-hidden="true" />
          <input
            id="movie-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try ‘Sherlock’ or ‘Friends’"
            autoComplete="off"
            className="min-h-12 w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-zinc-300 hover:bg-white/10 hover:text-white"
            >
              <X size={18} aria-hidden="true" />
            </button>
          ) : null}
        </div>
        <p className="mt-2 text-sm text-zinc-500">
          Results update automatically after you stop typing.
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">{title}</h2>
          {!loading && !error ? (
            <p className="mt-1 text-sm text-zinc-400" aria-live="polite">
              {movies.length} titles found
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-6" aria-busy={loading}>
        {loading ? (
          <LoadingCards />
        ) : error ? (
          <div className="rounded-3xl border border-red-400/25 bg-red-500/10 p-8 text-center">
            <p className="font-semibold text-red-100">{error}</p>
            <button
              type="button"
              onClick={() => setRetryKey((value) => value + 1)}
              className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 hover:bg-zinc-200"
            >
              <RefreshCw size={17} aria-hidden="true" />
              Try again
            </button>
          </div>
        ) : movies.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-zinc-900/60 p-10 text-center">
            <div className="text-4xl" aria-hidden="true">🎞️</div>
            <h3 className="mt-4 text-xl font-bold text-white">No titles found</h3>
            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-300">
              Check the spelling, try a shorter title or clear the search to return to the full library.
            </p>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-6 min-h-11 rounded-xl bg-violet-600 px-5 py-2.5 font-semibold text-white hover:bg-violet-500"
            >
              Clear search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} onDetails={setSelectedMovie} />
            ))}
          </div>
        )}
      </div>

      {selectedMovie ? (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      ) : null}
    </section>
  );
};

export default Movies;
