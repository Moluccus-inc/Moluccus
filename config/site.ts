export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Moluccus | Innovative Solutions for a Better Tomorrow",
  description:
    "Moluccus is a technology startup that aims to bring innovative solutions to various industries through software development, open-source technology, and medical technology.",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "blog",
      href: "/blog",
    },
    {
      label: "about",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "blog",
      href: "/blog",
    },
    {
      label: "about",
      href: "/about",
    },
  ],
  links: {
    github: "https://github.com/moluccus-inc",
    twitter: "https://twitter.com/moluccus",
    docs: "/",
    discord: "https://discord.gg/##",
    sponsor: "https://patreon.com/##",
  },
  features: [
    {
      title: "Custom Software Development",
      description: "Tailored software solutions for your business needs.",
    },
    {
      title: "Frontend UI/UX Design",
      description: "Visually appealing and user-friendly interfaces.",
    },
    {
      title: "Backend Development",
      description: "Robust and scalable server-side solutions.",
    },
    {
      title: "Template Development",
      description: "Customizable and reusable project templates.",
    },
    {
      title: "Mobile, Desktop, and Web Development",
      description: "Cross-platform applications for various devices.",
    },
    {
      title: "Tutorials and Resources",
      description: "Comprehensive learning materials and resources.",
    },
    {
      title: "Artificial Intelligence Solutions",
      description: "Intelligent software leveraging AI and ML technologies.",
    },
    {
      title: "E-commerce Development",
      description: "Secure and scalable e-commerce platforms.",
    },
  ],
  investors: [
    {
      img: "/logo.png",
      name: "Moluccus",
      link: "/",
    },
  ],
  individualinvestors: [
    {
      img: "/logo.png",
      name: "Moluccus",
      description: "Moluccus Community",
      link: "/",
    },
  ],
};
