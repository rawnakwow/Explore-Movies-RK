import { Compass, RefreshCw, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import LoadingCards from "../components/LoadingCards";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import PageIntro from "../components/PageIntro";
import { getAllShows } from "../services/movie-api";

const Discover = () => {
  const [shows, setShows] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retryKey, setRetryKey] = useState(0);

  useEffect(() => {
    const controller = new AbortController();

    const loadShows = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await getAllShows(controller.signal);
        setShows(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError("We could not load discovery picks right now.");
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false);
      }
    };

    loadShows();
    return () => controller.abort();
  }, [retryKey]);

  const genres = useMemo(() => {
    const counts = new Map();

    shows.forEach((show) => {
      show.genres?.forEach((genre) => {
        counts.set(genre, (counts.get(genre) || 0) + 1);
      });
    });

    return [
      "All",
      ...Array.from(counts.entries())
        .sort((a, b) => b[1] - a[1])
        .slice(0, 8)
        .map(([genre]) => genre),
    ];
  }, [shows]);

  const curatedShows = useMemo(() => {
    const filtered =
      selectedGenre === "All"
        ? shows
        : shows.filter((show) => show.genres?.includes(selectedGenre));

    return [...filtered]
      .sort((a, b) => (b.rating?.average || 0) - (a.rating?.average || 0))
      .slice(0, 20);
  }, [shows, selectedGenre]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <PageIntro
        eyebrow="Discover"
        title="Find a show by genre"
        description="Choose a genre and explore highly rated titles without sorting through an overwhelming list."
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-sm font-semibold text-violet-200">
          <Sparkles size={16} aria-hidden="true" />
          Curated from live TVMaze data
        </span>
      </PageIntro>

      <div className="mt-10 rounded-3xl border border-white/10 bg-zinc-900/55 p-4 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-violet-600/15 text-violet-300">
            <Compass size={21} aria-hidden="true" />
          </span>
          <div>
            <h2 className="font-semibold text-white">Browse by genre</h2>
            <p className="mt-0.5 text-sm text-zinc-400">
              One filter at a time keeps the choice simple.
            </p>
          </div>
        </div>

        <div className="mt-5 flex gap-2 overflow-x-auto pb-1" aria-label="Genre filters">
          {genres.map((genre) => {
            const active = genre === selectedGenre;

            return (
              <button
                key={genre}
                type="button"
                aria-pressed={active}
                onClick={() => setSelectedGenre(genre)}
                className={`min-h-11 shrink-0 rounded-full border px-4 text-sm font-semibold transition ${
                  active
                    ? "border-violet-400 bg-violet-600 text-white"
                    : "border-white/10 bg-white/[0.03] text-zinc-300 hover:border-violet-400/40 hover:bg-white/[0.06]"
                }`}
              >
                {genre}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-2 border-b border-white/10 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-violet-300">{selectedGenre}</p>
          <h2 className="mt-1 text-2xl font-bold text-white">
            {selectedGenre === "All" ? "Top-rated picks" : `Top ${selectedGenre} picks`}
          </h2>
        </div>
        {!loading && !error ? (
          <p className="text-sm text-zinc-400" aria-live="polite">
            {curatedShows.length} curated titles
          </p>
        ) : null}
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
        ) : (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
            {curatedShows.map((movie) => (
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

export default Discover;
