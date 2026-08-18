import { FileText, Github, Linkedin, Mail, type LucideIcon } from "lucide-react";

export const profile = {
  name: "Nathan Asfaw",
  firstName: "Nathan",
  initials: "NA",
  title: "Computer Science Student at University of Georgia",
  photoSrc: "/profile.jpg",
};

export const phone = {
  display: "(678) 414-7923",
  tel: "+16784147923",
};

export const contactCardHref = "/contact.vcf";

export interface LinkItem {
  label: string;
  sublabel: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  copyValue?: string;
  copyLabel?: string;
  type?: string;
}

export const resumeHref = "/resume.pdf";

export const links: LinkItem[] = [
  {
    label: "LinkedIn",
    sublabel: "Connect with me",
    href: "https://www.linkedin.com/in/nathan-asfaw/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Resume",
    sublabel: "View my resume (PDF)",
    href: resumeHref,
    icon: FileText,
    external: true,
  },
  {
    label: "Email",
    sublabel: "nathanrasfaw@gmail.com",
    href: "mailto:nathanrasfaw@gmail.com",
    icon: Mail,
    copyValue: "nathanrasfaw@gmail.com",
    copyLabel: "Copy email address",
  },
  {
    label: "GitHub",
    sublabel: "github.com/nathannasfaw",
    href: "https://github.com/nathannasfaw",
    icon: Github,
    external: true,
  },
];
