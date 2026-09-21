import { Heart, Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router";
import EmptyState from "../components/EmptyState";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import PageIntro from "../components/PageIntro";
import useFavorites from "../context/useFavorites";

const Favorites = () => {
  const { favorites } = useFavorites();
  const [query, setQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const visibleFavorites = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    if (!keyword) return favorites;

    return favorites.filter((movie) =>
      movie.name.toLowerCase().includes(keyword),
    );
  }, [favorites, query]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <PageIntro
        eyebrow="Your collection"
        title="Favorites"
        description="Save titles you want to revisit. Your list stays in this browser, so there is no sign-up or extra step."
      />

      {favorites.length === 0 ? (
        <div className="mx-auto mt-12 max-w-2xl">
          <EmptyState
            icon={Heart}
            title="No favorites yet"
            description="Tap the heart on any movie card or in the details view to build a personal shortlist."
          >
            <div className="flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/movies"
                className="inline-flex min-h-11 items-center justify-center rounded-xl bg-violet-600 px-5 py-2.5 font-semibold text-white hover:bg-violet-500"
              >
                Browse movies
              </Link>
              <Link
                to="/discover"
                className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 font-semibold text-zinc-100 hover:bg-white/5"
              >
                Explore genres
              </Link>
            </div>
          </EmptyState>
        </div>
      ) : (
        <>
          <div className="mx-auto mt-9 max-w-2xl">
            <label htmlFor="favorites-search" className="mb-2 block text-sm font-semibold text-zinc-200">
              Search your favorites
            </label>
            <div className="flex min-h-12 items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900 px-4 shadow-xl shadow-black/10 focus-within:border-violet-400/70">
              <Search size={20} className="shrink-0 text-zinc-400" aria-hidden="true" />
              <input
                id="favorites-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search saved titles..."
                className="min-h-12 w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
              />
              {query ? (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Clear favorites search"
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-xl text-zinc-300 hover:bg-white/10 hover:text-white"
                >
                  <X size={18} aria-hidden="true" />
                </button>
              ) : null}
            </div>
          </div>

          <div className="mt-10 flex items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <h2 className="text-2xl font-bold text-white">Saved titles</h2>
              <p className="mt-1 text-sm text-zinc-400" aria-live="polite">
                {visibleFavorites.length} of {favorites.length} shown
              </p>
            </div>
          </div>

          <div className="mt-6">
            {visibleFavorites.length ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
                {visibleFavorites.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} onDetails={setSelectedMovie} />
                ))}
              </div>
            ) : (
              <EmptyState
                icon={Search}
                title="No saved title matches"
                description="Try a shorter title or clear your search to see all favorites."
              >
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="min-h-11 rounded-xl bg-violet-600 px-5 py-2.5 font-semibold text-white hover:bg-violet-500"
                >
                  Clear search
                </button>
              </EmptyState>
            )}
          </div>
        </>
      )}

      {selectedMovie ? (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      ) : null}
    </section>
  );
};

export default Favorites;
