import {
  ArrowRight,
  Compass,
  Heart,
  Info,
  Play,
  Search,
  Sparkles,
  Star,
} from "lucide-react";
import { Link } from "react-router";

const Home = () => {
  const steps = [
    {
      number: "01",
      title: "Search",
      text: "Type a title and get live TVMaze results without a separate submit step.",
    },
    {
      number: "02",
      title: "Explore",
      text: "Compare posters, ratings, release years and genres in a consistent card layout.",
    },
    {
      number: "03",
      title: "Check details",
      text: "Open one focused details view with summary, runtime, status and network information.",
    },
    {
      number: "04",
      title: "Save or continue",
      text: "Add a favorite for later or open a streaming platform search when you are ready.",
    },
  ];

  const features = [
    {
      title: "Live search",
      text: "Search titles quickly with clear loading, empty and error feedback.",
      icon: Search,
    },
    {
      title: "Useful details",
      text: "See rating, release date, genres, runtime and summary before deciding.",
      icon: Info,
    },
    {
      title: "Genre discovery",
      text: "Reduce choice overload by browsing one genre at a time on the Discover page.",
      icon: Compass,
    },
    {
      title: "Local favorites",
      text: "Save interesting titles in this browser and return to them without signing in.",
      icon: Heart,
    },
  ];

  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 -z-20 bg-zinc-950" />
        <div className="absolute -left-24 top-20 -z-10 h-80 w-80 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute -right-24 top-0 -z-10 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:48px_48px]" />

        <div className="mx-auto grid min-h-[78vh] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/10 px-4 py-2 text-xs font-bold text-violet-200">
              <Sparkles size={14} aria-hidden="true" />
              Find your next favorite show
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Discover stories
              <span className="block bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                worth watching.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg">
              Search live show data, compare the details that matter, browse by genre and save a shortlist for later.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/movies"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 font-bold text-white hover:brightness-110 active:translate-y-px"
              >
                Browse movies
                <ArrowRight size={18} aria-hidden="true" />
              </Link>

              <Link
                to="/discover"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3 font-semibold text-zinc-100 hover:bg-white/[0.07]"
              >
                <Compass size={18} aria-hidden="true" />
                Discover genres
              </Link>

              <a
                href="#how-it-works"
                className="inline-flex min-h-12 items-center justify-center rounded-xl px-5 py-3 font-semibold text-zinc-300 hover:bg-white/5 hover:text-white"
              >
                How it works
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-8 -z-10 rounded-full bg-violet-600/10 blur-3xl" />
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 shadow-2xl shadow-black/40 backdrop-blur">
              <div className="rounded-3xl border border-white/10 bg-zinc-900 p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-zinc-400">
                      MovieExplorer
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-white">Find something great</h2>
                  </div>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-600/15 text-violet-300">
                    <Search size={22} aria-hidden="true" />
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {["Search by title", "Compare key details", "Save favorites", "Search streaming platforms"].map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-600 text-sm font-bold text-white">
                        0{index + 1}
                      </span>
                      <span className="text-sm font-semibold text-zinc-200">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 p-4">
                  <div>
                    <p className="text-xs text-white/75">Ready to explore?</p>
                    <p className="font-bold text-white">Hundreds of titles</p>
                  </div>
                  <Star className="fill-white text-white" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 border-b border-white/10 bg-zinc-950/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">How it works</p>
            <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">
              From search to decision in four clear steps
            </h2>
            <p className="mt-4 leading-7 text-zinc-300">
              Each step has one main goal, so the interface stays predictable and easy to scan.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-white/10 bg-zinc-900/60 p-6 transition hover:-translate-y-1 hover:border-violet-400/35"
              >
                <span className="text-sm font-bold text-violet-300">{step.number}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-300">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">Features</p>
            <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              Useful tools without unnecessary clutter
            </h2>
          </div>
          <p className="max-w-xl leading-7 text-zinc-300 lg:justify-self-end">
            Consistent components, clear hierarchy and responsive layouts keep the same core experience across desktop, tablet and mobile.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ title, text, icon: Icon }) => (
            <article
              key={title}
              className="group rounded-3xl border border-white/10 bg-zinc-900/55 p-6 transition hover:border-violet-400/35 hover:bg-zinc-900"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-600/15 text-violet-300 transition group-hover:bg-violet-600 group-hover:text-white">
                <Icon size={23} aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-violet-400/20 bg-gradient-to-br from-violet-600/20 via-zinc-900 to-fuchsia-600/10 px-6 py-14 text-center sm:px-10 sm:py-16">
          <div className="absolute -left-20 top-0 h-60 w-60 rounded-full bg-violet-500/20 blur-3xl" />
          <div className="absolute -right-20 bottom-0 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-violet-200">
              <Play size={14} aria-hidden="true" />
              Start exploring
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-white sm:text-5xl">
              Your next favorite show is waiting.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-7 text-zinc-300">
              Search directly when you know the title, or use genre discovery when you want inspiration.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/movies"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-zinc-950 hover:bg-zinc-200"
              >
                Browse movies
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                to="/favorites"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10"
              >
                <Heart size={18} aria-hidden="true" />
                View favorites
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
