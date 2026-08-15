import { Linkedin, Phone, type LucideIcon } from "lucide-react";

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

export interface LinkItem {
  label: string;
  sublabel: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
  copyValue?: string;
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
    label: "Call me",
    sublabel: phone.display,
    href: `tel:${phone.tel}`,
    icon: Phone,
    copyValue: phone.display,
  },
];

export const resumeHref = "/resume.pdf";
