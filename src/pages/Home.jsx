import {
  ArrowRight,
  Clapperboard,
  Search,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router";

const previewCards = [
  { title: "Midnight Echo", genre: "Drama", score: "8.7", gradient: "from-violet-500/70 via-fuchsia-600/40 to-zinc-950" },
  { title: "Neon Horizon", genre: "Sci-Fi", score: "9.1", gradient: "from-cyan-500/50 via-violet-600/40 to-zinc-950" },
  { title: "Afterglow", genre: "Mystery", score: "8.4", gradient: "from-rose-500/55 via-purple-700/35 to-zinc-950" },
];

const features = [
  {
    icon: Search,
    title: "Live title search",
    text: "Type a movie or show name and get matching results from TVMaze in seconds.",
  },
  {
    icon: Star,
    title: "Quick movie insights",
    text: "Scan posters, ratings and release years in a responsive card layout.",
  },
  {
    icon: Clapperboard,
    title: "Focused details",
    text: "Open a cinematic modal with summary, genres, runtime, network and more.",
  },
];

const Home = () => {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/[0.06]">
        <div className="absolute inset-0 -z-30 bg-[#07070b]" />
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_-10%,rgba(139,92,246,.16),transparent_42%)]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_right,rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />

        <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_.98fr] lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-3.5 py-2 text-xs font-bold text-violet-200 shadow-[inset_0_1px_0_rgba(255,255,255,.08)]">
              <Sparkles size={14} /> Discover. Search. Watch.
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[.98] tracking-[-0.055em] text-white sm:text-6xl lg:text-[4.7rem]">
              Your next favorite
              <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-rose-300 bg-clip-text pb-2 text-transparent">
                story starts here.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-zinc-400 sm:text-lg">
              Explore hundreds of titles, search instantly, compare ratings and open rich movie details without leaving the experience.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/movies"
                className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3.5 font-bold text-white shadow-xl shadow-violet-950/35 hover:-translate-y-0.5 hover:shadow-violet-900/40"
              >
                Explore Movies
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-3.5 font-semibold text-zinc-200 backdrop-blur hover:bg-white/[0.08]"
              >
                <Zap size={17} className="text-violet-300" /> See Features
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-zinc-500">
              <span><b className="text-white">Live</b> TVMaze data</span>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
              <span><b className="text-white">Responsive</b> on every device</span>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
              <span><b className="text-white">Fast</b> search experience</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[570px] lg:ml-auto">
            <div className="absolute -inset-10 -z-10 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative rounded-[2.25rem] border border-white/10 bg-white/[0.045] p-3 shadow-[0_35px_100px_rgba(0,0,0,.55)] backdrop-blur-xl sm:p-4">
              <div className="overflow-hidden rounded-[1.7rem] border border-white/[0.08] bg-[#101016]">
                <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3 sm:px-5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-zinc-600">Movie Explorer</span>
                </div>

                <div className="p-4 sm:p-5">
                  <div className="flex items-center gap-3 rounded-2xl border border-violet-400/15 bg-violet-500/[0.07] px-4 py-3 text-sm text-zinc-400 shadow-[inset_0_1px_0_rgba(255,255,255,.04)]">
                    <Search size={18} className="text-violet-300" />
                    Search for a movie...
                    <span className="ml-auto hidden rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-bold text-zinc-600 sm:block">LIVE</span>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {previewCards.map((movie, index) => (
                      <div
                        key={movie.title}
                        className={`group relative aspect-[2/3] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b ${movie.gradient} p-3 shadow-lg shadow-black/20 ${index === 1 ? "-translate-y-2" : ""}`}
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_20%,rgba(255,255,255,.24),transparent_28%)]" />
                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/55 to-transparent" />
                        <div className="absolute inset-x-3 bottom-3">
                          <div className="mb-1 flex items-center gap-1 text-[10px] font-bold text-amber-300">
                            <Star size={10} className="fill-amber-300" /> {movie.score}
                          </div>
                          <p className="truncate text-xs font-bold text-white sm:text-sm">{movie.title}</p>
                          <p className="mt-0.5 text-[10px] text-zinc-400">{movie.genre}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {[
                      ["500+", "Titles"],
                      ["Live", "Search"],
                      ["100%", "Responsive"],
                    ].map(([value, label]) => (
                      <div key={label} className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-3 py-3 text-center">
                        <p className="text-sm font-black text-white sm:text-base">{value}</p>
                        <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-zinc-600">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-3 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#12121a]/90 px-4 py-3 shadow-2xl shadow-black/40 backdrop-blur-xl sm:flex">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-amber-400/10 text-amber-300">
                <Star size={17} className="fill-amber-300" />
              </span>
              <div>
                <p className="text-xs text-zinc-500">Top rated picks</p>
                <p className="text-sm font-bold text-white">Ready when you are</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.24em] text-violet-400">Built for discovery</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Everything you need to find the next watch.
          </h2>
          <p className="mt-5 leading-7 text-zinc-500">
            A simple experience, polished enough to feel cinematic and focused enough to stay fast.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map(({ icon: Icon, title, text }, index) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/[0.07] bg-white/[0.025] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,.03)] transition hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl transition group-hover:bg-fuchsia-500/15" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl border border-violet-400/15 bg-violet-500/10 text-violet-300">
                    <Icon size={21} />
                  </span>
                  <span className="text-xs font-black tracking-[0.2em] text-zinc-700">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-500">{text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-violet-400/15 bg-gradient-to-r from-violet-600/15 via-fuchsia-500/10 to-transparent p-7 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:p-9">
          <div>
            <p className="text-sm font-bold text-violet-300">Ready to explore?</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight text-white sm:text-3xl">Find something worth watching tonight.</h3>
          </div>
          <Link
            to="/movies"
            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-zinc-950 hover:-translate-y-0.5 hover:bg-violet-100 sm:mt-0"
          >
            Browse Library <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
