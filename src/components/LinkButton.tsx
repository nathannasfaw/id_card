import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, Copy } from "lucide-react";
import type { LinkItem } from "../config/links";

interface LinkButtonProps {
  link: LinkItem;
  variants?: Variants;
  onCopy?: (value: string) => void;
}

export default function LinkButton({
  link,
  variants,
  onCopy,
}: LinkButtonProps) {
  const Icon = link.icon;
  const { copyValue } = link;

  return (
    <motion.a
      variants={variants}
      href={link.href}
      type={link.type}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-stone-900/60 px-5 py-4 backdrop-blur-md transition-colors duration-200 hover:border-amber-500/30 hover:bg-stone-900/80"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-stone-800/80 text-stone-300 transition-colors duration-200 group-hover:text-amber-400">
        <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block truncate text-sm font-semibold text-stone-50">
          {link.label}
        </span>
        <span className="block truncate text-xs text-stone-400">
          {link.sublabel}
        </span>
      </span>
      {copyValue && onCopy && (
        <button
          type="button"
          aria-label={link.copyLabel ?? `Copy ${link.label.toLowerCase()}`}
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            onCopy(copyValue);
          }}
          className="rounded-lg border border-white/10 p-2 text-stone-400 transition-colors duration-200 hover:border-amber-500/30 hover:text-amber-400"
        >
          <Copy size={14} strokeWidth={2} aria-hidden="true" />
        </button>
      )}
      {link.external && (
        <ArrowUpRight
          size={16}
          strokeWidth={2}
          aria-hidden="true"
          className="shrink-0 text-stone-500 transition-colors duration-200 group-hover:text-amber-400"
        />
      )}
    </motion.a>
  );
}
