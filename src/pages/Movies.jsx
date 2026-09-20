import { Search, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import LoadingCards from "../components/LoadingCards";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import { getAllShows, searchShows } from "../services/movie-api";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const keyword = query.trim();

    const timer = setTimeout(async () => {
      setLoading(true);
      setError("");

      try {
        const data = keyword
          ? await searchShows(keyword, controller.signal)
          : await getAllShows(controller.signal);
        setMovies(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("Could not load movies right now. Please try again.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    }, keyword ? 350 : 0);

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [query]);

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[430px] bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,.16),transparent_55%)]" />

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-xs font-bold text-violet-200">
            <Sparkles size={14} /> Live TVMaze collection
          </div>
          <h1 className="text-4xl font-black tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
            Find your next <span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">favorite.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base">
            Search by title or browse the collection. Open any card to see ratings, release information, genres and a full summary.
          </p>
        </div>

        <div className="sticky top-[88px] z-30 mx-auto mt-9 max-w-2xl">
          <label htmlFor="movie-search" className="sr-only">Search for a movie</label>
          <div className="group flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#111117]/90 p-2.5 pl-4 shadow-[0_20px_60px_rgba(0,0,0,.3)] backdrop-blur-xl transition focus-within:border-violet-400/35 focus-within:shadow-[0_20px_70px_rgba(76,29,149,.2)]">
            <Search size={19} className="shrink-0 text-violet-300" />
            <input
              id="movie-search"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search for a movie or show..."
              className="min-w-0 flex-1 bg-transparent py-1.5 text-sm text-white outline-none placeholder:text-zinc-600 sm:text-base"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="grid h-9 w-9 shrink-0 place-items-center rounded-xl text-zinc-500 hover:bg-white/[0.06] hover:text-white"
              >
                <X size={17} />
              </button>
            )}
            <span className="hidden rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-2 text-xs font-bold text-white sm:block">
              Search
            </span>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-b border-white/[0.07] pb-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-400">
              {query.trim() ? "Search Results" : "Discover"}
            </p>
            <h2 className="mt-2 text-2xl font-black tracking-tight text-white">
              {query.trim() ? `Results for “${query.trim()}”` : "Popular Shows"}
            </h2>
          </div>
          {!loading && !error && (
            <p className="text-sm text-zinc-600">
              <span className="font-bold text-zinc-300">{movies.length}</span> titles found
            </p>
          )}
        </div>

        <div className="mt-7">
          {loading ? (
            <LoadingCards />
          ) : error ? (
            <div className="rounded-3xl border border-red-400/15 bg-red-500/[0.07] p-9 text-center text-sm text-red-200">
              {error}
            </div>
          ) : movies.length === 0 ? (
            <div className="rounded-3xl border border-white/[0.07] bg-white/[0.025] p-12 text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/10 text-2xl">🎞️</div>
              <h3 className="mt-5 text-xl font-bold text-white">No movies found</h3>
              <p className="mt-2 text-sm text-zinc-500">Try another title or clear the search box.</p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-6 rounded-xl border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-sm font-bold text-violet-200 hover:bg-violet-500/20"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onDetails={setSelectedMovie} />
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedMovie && <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </section>
  );
};

export default Movies;
