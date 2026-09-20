const LoadingCards = ({ count = 8 }) => {
  return (
    <div className="grid grid-cols-1 gap-5 min-[440px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="overflow-hidden rounded-[1.45rem] border border-white/[0.06] bg-[#111117]">
          <div className="aspect-[2/3] animate-pulse bg-gradient-to-br from-zinc-900 via-zinc-800/80 to-zinc-900" />
          <div className="space-y-3 p-4 sm:p-5">
            <div className="h-5 w-3/4 animate-pulse rounded-lg bg-zinc-800" />
            <div className="h-4 w-1/2 animate-pulse rounded-lg bg-zinc-800/70" />
            <div className="h-10 animate-pulse rounded-xl bg-violet-950/50" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingCards;
