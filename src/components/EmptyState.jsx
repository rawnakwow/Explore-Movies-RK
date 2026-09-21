const EmptyState = ({ icon: Icon, title, description, children }) => {
  return (
    <div className="rounded-3xl border border-white/10 bg-zinc-900/60 px-6 py-12 text-center sm:px-10">
      {Icon ? (
        <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
          <Icon size={26} aria-hidden="true" />
        </span>
      ) : null}
      <h2 className="mt-5 text-2xl font-bold text-white">{title}</h2>
      <p className="mx-auto mt-3 max-w-md leading-7 text-zinc-300">
        {description}
      </p>
      {children ? <div className="mt-7">{children}</div> : null}
    </div>
  );
};

export default EmptyState;
