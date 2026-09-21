import { CheckCircle2, Info } from "lucide-react";

const Toast = ({ notice }) => {
  if (!notice) return null;

  const Icon = notice.tone === "success" ? CheckCircle2 : Info;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-1/2 z-[80] flex w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 items-center gap-3 rounded-2xl border border-white/15 bg-zinc-900/95 px-4 py-3 text-sm font-medium text-zinc-100 shadow-2xl shadow-black/50 backdrop-blur sm:bottom-6"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-violet-500/15 text-violet-300">
        <Icon size={19} aria-hidden="true" />
      </span>
      <span>{notice.message}</span>
    </div>
  );
};

export default Toast;
