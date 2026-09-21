const LoadingCards = ({ count = 8 }) => {
  return (
    <div
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:gap-6"
      aria-label="Loading movie cards"
      role="status"
    >
      <span className="sr-only">Loading titles...</span>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70"
        >
          <div className="aspect-[2/3] animate-pulse bg-zinc-800" />
          <div className="space-y-3 p-4">
            <div className="h-5 w-3/4 animate-pulse rounded bg-zinc-800" />
            <div className="h-4 w-1/2 animate-pulse rounded bg-zinc-800" />
            <div className="h-11 animate-pulse rounded-xl bg-zinc-800" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingCards;
