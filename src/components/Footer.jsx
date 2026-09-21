import { Clapperboard } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto grid max-w-7xl gap-7 px-4 py-9 sm:px-6 md:grid-cols-[1fr_auto] md:items-end lg:px-8">
        <div>
          <Link
            to="/"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl font-semibold text-white"
          >
            <Clapperboard size={19} className="text-violet-300" aria-hidden="true" />
            MovieExplorer
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
            Explore shows with live TVMaze data, save favorites locally and use clear search links to continue on streaming platforms.
          </p>
          <p className="mt-3 text-sm text-zinc-500">
            © 2026 MovieExplorer. Educational project.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-300" aria-label="Footer navigation">
          <Link to="/" className="rounded-lg py-2 hover:text-white">Home</Link>
          <Link to="/movies" className="rounded-lg py-2 hover:text-white">Movies</Link>
          <Link to="/discover" className="rounded-lg py-2 hover:text-white">Discover</Link>
          <Link to="/favorites" className="rounded-lg py-2 hover:text-white">Favorites</Link>
          <Link to="/about" className="rounded-lg py-2 hover:text-white">About</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
