import { Linkedin, UserRoundPlus, type LucideIcon } from "lucide-react";

export const profile = {
  name: "Marco Walther",
  firstName: "Marco",
  initials: "MW",
  photoSrc: "/profile.jpg",
};

export const phone = {
  display: "+1 (770) 361-1913",
  tel: "+17703611913",
};

/**
 * Static vCard in `public/`. Keep the phone number above in sync with the
 * TEL line in `public/contact.vcf`.
 */
export const contactCardHref = "/contact.vcf";

export interface LinkItem {
  label: string;
  sublabel: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  copyValue?: string;
  /** Accessible name for the copy button; falls back to `Copy <label>`. */
  copyLabel?: string;
  /** Advisory MIME type for non-HTML targets such as the vCard. */
  type?: string;
}

export const links: LinkItem[] = [
  {
    label: "LinkedIn",
    sublabel: "Connect with me",
    href: "https://www.linkedin.com/in/marco-walther",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Save my contact",
    sublabel: phone.display,
    href: contactCardHref,
    icon: UserRoundPlus,
    copyValue: phone.display,
    copyLabel: "Copy phone number",
    type: "text/vcard",
  },
];

export const resumeHref = "/resume.pdf";
