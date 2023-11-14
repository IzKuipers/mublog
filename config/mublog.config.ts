import type { Link } from "$lib/modules/config";
import type { Author } from "$lib/modules/post";

/* Blog title */
export const title: string = "IzKuipers' blog";

/* Blog URL */
export const url: string = "http://localhost:5173";

/* Primary language for blogs */
export const primaryLanguage: string = "en";

/* The default author to use when publishing blogs */
export const defaultAuthor: Author = {
  name: "Izaak Kuipers",
  shortName: "Izaak",
  url: "https://izkuipers.nl",
};

/* Resources to link to */
export const links: Link[] = [
  {
    icon: "ph:link-bold",
    title: "Website",
    url: "https://izkuipers.nl",
  },
  {
    icon: "mdi:github",
    title: "GitHub",
    url: "https://izkuipers.nl",
  },
  {
    icon: "mdi:twitter",
    title: "Twitter",
    url: "https://twitter.com/izkuipers",
  },
];
