import {
  Accessibility,
  ArrowRight,
  Database,
  Heart,
  MousePointerClick,
  Search,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { Link } from "react-router";
import PageIntro from "../components/PageIntro";

const About = () => {
  const principles = [
    {
      icon: Search,
      title: "Find without friction",
      text: "Search, browse and genre discovery are separated into clear paths so users can choose the fastest route for their goal.",
    },
    {
      icon: MousePointerClick,
      title: "Clear actions",
      text: "Primary actions are visually distinct, touch targets are generous and important controls stay easy to reach.",
    },
    {
      icon: Smartphone,
      title: "Responsive by default",
      text: "Cards, navigation, filters and dialogs adapt from small phones to tablets and desktop screens.",
    },
    {
      icon: Accessibility,
      title: "Accessible interaction",
      text: "Semantic buttons, labels, alt text, visible keyboard focus and readable contrast support more ways to use the site.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <PageIntro
        eyebrow="About MovieExplorer"
        title="A simpler way to choose what to watch"
        description="MovieExplorer is a learning project focused on useful information, clear hierarchy and a low-friction browsing experience."
      >
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/movies"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 font-semibold text-white hover:bg-violet-500"
          >
            Browse movies
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
          <Link
            to="/discover"
            className="inline-flex min-h-11 items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 font-semibold text-zinc-100 hover:bg-white/5"
          >
            Discover by genre
          </Link>
        </div>
      </PageIntro>

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {principles.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="rounded-3xl border border-white/10 bg-zinc-900/55 p-6"
          >
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
              <Icon size={23} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-lg font-bold text-white">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-300">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
        <article className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-violet-600/15 via-zinc-900 to-zinc-950 p-7 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">
            The user flow
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white">
            Search, understand, save, then decide
          </h2>
          <ol className="mt-7 space-y-4">
            {[
              "Search for a title or browse the movie library.",
              "Open details to compare rating, genres, runtime and summary.",
              "Save useful titles to Favorites for later.",
              "Open a streaming search link when you are ready to look for availability.",
            ].map((item, index) => (
              <li key={item} className="flex gap-4 rounded-2xl border border-white/10 bg-black/15 p-4">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-600 text-sm font-bold text-white">
                  {index + 1}
                </span>
                <span className="pt-1.5 text-sm leading-6 text-zinc-200">{item}</span>
              </li>
            ))}
          </ol>
        </article>

        <div className="grid gap-6">
          <article className="rounded-[2rem] border border-white/10 bg-zinc-900/55 p-7">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500/10 text-emerald-300">
              <Database size={23} aria-hidden="true" />
            </span>
            <h2 className="mt-5 text-xl font-bold text-white">Data source</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Show information comes from the public TVMaze API. Streaming buttons open platform search pages; they do not promise regional availability.
            </p>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-zinc-900/55 p-7">
            <div className="flex gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                <Heart size={23} aria-hidden="true" />
              </span>
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-sky-500/10 text-sky-300">
                <ShieldCheck size={23} aria-hidden="true" />
              </span>
            </div>
            <h2 className="mt-5 text-xl font-bold text-white">Favorites & privacy</h2>
            <p className="mt-3 leading-7 text-zinc-300">
              Favorites are stored locally in your browser. No account is required, and this demo does not send a favorites list to a separate backend.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
