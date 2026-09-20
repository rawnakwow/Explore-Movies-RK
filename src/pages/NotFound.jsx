import { ArrowLeft, Clapperboard } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <section className="relative grid min-h-[72vh] place-items-center overflow-hidden px-4 text-center">
      <div className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-3xl" />
      <div className="max-w-lg">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-violet-300">
          <Clapperboard size={25} />
        </div>
        <p className="mt-5 bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-7xl font-black tracking-[-0.06em] text-transparent">404</p>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white">This scene does not exist.</h1>
        <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-500">The page you are looking for may have moved, or the link may be incorrect.</p>
        <Link
          to="/"
          className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-violet-950/30 hover:-translate-y-0.5"
        >
          <ArrowLeft size={17} /> Back Home
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
