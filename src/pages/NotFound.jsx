import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="grid min-h-[70vh] place-items-center px-4 py-16 text-center">
      <div className="max-w-lg">
        <p className="text-7xl font-black text-violet-400">404</p>
        <h1 className="mt-3 text-3xl font-black text-white">Page not found</h1>
        <p className="mt-3 leading-7 text-zinc-300">
          The page you are looking for does not exist. Return home or jump straight into the movie library.
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 font-semibold text-white hover:bg-violet-500"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            Back home
          </Link>
          <Link
            to="/movies"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/15 px-5 py-2.5 font-semibold text-zinc-100 hover:bg-white/5"
          >
            <Search size={18} aria-hidden="true" />
            Browse movies
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
