import { Clapperboard, Code2, Heart } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.06] bg-black/15">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5 font-bold text-white">
              <span className="grid h-8 w-8 place-items-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
                <Clapperboard size={16} />
              </span>
              MovieExplorer
            </Link>
            <p className="mt-2 text-xs text-zinc-600">© 2026 MovieExplorer. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-zinc-500">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/movies" className="hover:text-white">Movies</Link>
            <span className="inline-flex items-center gap-1.5 text-zinc-600"><Code2 size={15} /> React Project</span>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-1.5 border-t border-white/[0.05] pt-5 text-[11px] text-zinc-700">
          Built with <Heart size={12} className="fill-violet-500 text-violet-500" /> for movie discovery.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
