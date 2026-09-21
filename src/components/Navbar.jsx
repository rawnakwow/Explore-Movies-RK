import { Clapperboard, Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";
import useFavorites from "../context/useFavorites";

const navClass = ({ isActive }) =>
  `inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold transition ${
    isActive
      ? "bg-white/10 text-white"
      : "text-zinc-300 hover:bg-white/5 hover:text-white"
  }`;

const mobileNavClass = ({ isActive }) =>
  `flex min-h-11 items-center justify-between rounded-xl px-4 text-sm font-semibold transition ${
    isActive
      ? "bg-violet-600 text-white"
      : "text-zinc-200 hover:bg-white/5"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { favorites } = useFavorites();

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="flex min-h-11 items-center gap-2 rounded-xl"
          onClick={closeMenu}
          aria-label="MovieExplorer home"
        >
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-600 shadow-lg shadow-violet-900/30">
            <Clapperboard size={20} aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">
            Movie<span className="text-violet-300">Explorer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/movies" className={navClass}>Movies</NavLink>
          <NavLink to="/discover" className={navClass}>Discover</NavLink>
          <NavLink to="/favorites" className={navClass}>
            <span className="flex items-center gap-2">
              Favorites
              {favorites.length > 0 ? (
                <span className="grid min-w-6 place-items-center rounded-full bg-violet-500 px-1.5 py-0.5 text-xs text-white" aria-label={`${favorites.length} favorites`}>
                  {favorites.length}
                </span>
              ) : null}
            </span>
          </NavLink>
          <NavLink to="/about" className={navClass}>About</NavLink>
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <Link
            to="/favorites"
            className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 text-zinc-200 hover:bg-white/5 lg:hidden"
            aria-label={`Open favorites${favorites.length ? `, ${favorites.length} saved` : ""}`}
          >
            <Heart size={19} aria-hidden="true" />
          </Link>
          <Link
            to="/movies"
            className="hidden min-h-11 items-center rounded-xl bg-white px-5 text-sm font-bold text-zinc-950 hover:bg-violet-200 md:inline-flex"
          >
            Browse movies
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center rounded-xl text-zinc-200 hover:bg-white/10 lg:hidden"
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-white/10 bg-zinc-950 px-4 py-4 lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto grid max-w-7xl gap-2">
            <NavLink to="/" end className={mobileNavClass} onClick={closeMenu}>Home</NavLink>
            <NavLink to="/movies" className={mobileNavClass} onClick={closeMenu}>Movies</NavLink>
            <NavLink to="/discover" className={mobileNavClass} onClick={closeMenu}>Discover</NavLink>
            <NavLink to="/favorites" className={mobileNavClass} onClick={closeMenu}>
              <span>Favorites</span>
              {favorites.length > 0 ? (
                <span className="rounded-full bg-black/25 px-2 py-0.5 text-xs">{favorites.length}</span>
              ) : null}
            </NavLink>
            <NavLink to="/about" className={mobileNavClass} onClick={closeMenu}>About</NavLink>
          </div>
        </nav>
      ) : null}
    </header>
  );
};

export default Navbar;
