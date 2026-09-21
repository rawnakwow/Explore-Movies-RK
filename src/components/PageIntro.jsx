const PageIntro = ({ eyebrow, title, description, children }) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-violet-300">
        {eyebrow}
      </p>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl">
        {title}
      </h1>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
        {description}
      </p>
      {children ? <div className="mt-7">{children}</div> : null}
    </div>
  );
};

export default PageIntro;
