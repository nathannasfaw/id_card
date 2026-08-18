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
        <h1 className="font-serif text-5xl font-semibold leading-tight text-stone-50 sm:text-6xl">
          {profile.name}
        </h1>
        <p className="mt-3 text-base font-medium tracking-tight text-stone-400">
          {profile.title}
        </p>
      </motion.div>

      <motion.div variants={variants} className="mt-6">
        <a
          href={contactCardHref}
          type="text/vcard"
          className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-shadow duration-300 hover:shadow-[0_0_28px_rgba(245,158,11,0.4)]"
        >
          <UserRoundPlus size={18} strokeWidth={2} aria-hidden="true" />
          Save my contact
        </a>
      </motion.div>
    </>
  );
}
