import { motion, type Variants } from "framer-motion";
import { UserRoundPlus } from "lucide-react";
import { contactCardHref, profile } from "../config/links";

interface ProfileCardProps {
  variants?: Variants;
}

export default function ProfileCard({ variants }: ProfileCardProps) {
  return (
    <>
      <motion.div variants={variants} className="mt-20 text-center">
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-base font-medium tracking-tight text-zinc-400">
          {profile.title}
        </p>
      </motion.div>

      <motion.div variants={variants} className="mt-6">
        <a
          href={contactCardHref}
          type="text/vcard"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(255,255,255,0.28)]"
        >
          <UserRoundPlus size={18} strokeWidth={2} aria-hidden="true" />
          Save my contact
        </a>
      </motion.div>
    </>
  );
}
