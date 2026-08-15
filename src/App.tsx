import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import LinkButton from "./components/LinkButton";
import ProfileCard from "./components/ProfileCard";
import { WavyBackground } from "./components/ui/wavy-background";
import { links, profile } from "./config/links";

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const handleCopy = useCallback(async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setToast("Copied!");
    } catch {
      setToast("Couldn't copy");
    }
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 1800);
  }, []);

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.08,
        delayChildren: prefersReducedMotion ? 0 : 0.1,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <main className="flex min-h-dvh w-full flex-col pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col"
      >
        <motion.div variants={item} className="relative h-56 w-full sm:h-64">
          <WavyBackground containerClassName="h-full w-full" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#050505]"
          />
        </motion.div>

        <div className="mx-auto flex w-full max-w-md flex-col px-5">
          <ProfileCard variants={item} />

          <div className="mt-6 flex flex-col gap-3">
            {links.map((link) => (
              <LinkButton
                key={link.label}
                link={link}
                variants={item}
                onCopy={handleCopy}
              />
            ))}
          </div>

          <motion.p
            variants={item}
            className="mt-10 text-center text-xs text-zinc-600"
          >
            © {new Date().getFullYear()} {profile.name}
          </motion.p>
        </div>
      </motion.div>

      <div className="pointer-events-none fixed inset-x-0 bottom-6 flex justify-center">
        <AnimatePresence>
          {toast && (
            <motion.div
              role="status"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.2 }}
              className="rounded-full border border-white/10 bg-zinc-900/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}
