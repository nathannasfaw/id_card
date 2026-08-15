import { motion, type Variants } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { profile, resumeHref } from "../config/links";

interface ProfileCardProps {
  variants?: Variants;
}

export default function ProfileCard({ variants }: ProfileCardProps) {
  return (
    <>
      <motion.div variants={variants} className="mt-2">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white">
          {profile.name}
        </h1>
      </motion.div>

      <motion.div variants={variants} className="mt-6">
        <a
          href={resumeHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.28)]"
        >
          <FileText size={16} strokeWidth={2} aria-hidden="true" />
          View Resume
          <ArrowRight
            size={16}
            strokeWidth={2}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </a>
      </motion.div>
    </>
  );
}
