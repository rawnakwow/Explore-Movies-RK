import { Clapperboard, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router";

const navClass = ({ isActive }) =>
  `relative rounded-full px-4 py-2 text-sm font-medium transition ${
    isActive
      ? "bg-white/10 text-white"
      : "text-zinc-400 hover:bg-white/[0.06] hover:text-white"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#08080c]/75 backdrop-blur-2xl">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-2xl border border-violet-400/30 bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-lg shadow-violet-950/40">
            <span className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.35),transparent_35%)]" />
            <Clapperboard size={20} className="relative" />
          </span>
          <div>
            <span className="block text-lg font-black tracking-[-0.03em] text-white">
              Movie<span className="bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">Explorer</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600 sm:block">
              Find your next watch
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.035] p-1 md:flex">
          <NavLink to="/" end className={navClass}>Home</NavLink>
          <NavLink to="/movies" className={navClass}>Movies</NavLink>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/movies"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-zinc-950 shadow-lg shadow-white/5 hover:-translate-y-0.5 hover:bg-violet-100"
          >
            <Search size={16} /> Explore Movies
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/10 md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/[0.06] bg-[#08080c]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-2">
            <NavLink to="/" end className={navClass} onClick={() => setOpen(false)}>Home</NavLink>
            <NavLink to="/movies" className={navClass} onClick={() => setOpen(false)}>Movies</NavLink>
            <Link
              to="/movies"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3 text-sm font-bold text-white"
            >
              <Search size={17} /> Explore Movies
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
