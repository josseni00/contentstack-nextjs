import API from "@/utils/api";
import { Asset, Entry, Link } from "./type";

export type THero = {
  heading: string;
  subheading: string;
  centerImageSrc: string;
  ctas: {
    image: string;
    url: string;
    title: string;
  }[];
};

type HeroResponse = Entry<{
  heading: string;
  description: string;
  image: Asset;
  links: {
    link: Link;
    image: Asset;
  }[];
}>;

export async function getHero(): Promise<THero> {
  try {
    const { data } = await API.get<HeroResponse>(
      "/content_types/hero/entries/blt72d72f95f720c0cc",
    );

    const heroEntry = data.entry;

    return {
      heading: heroEntry.heading,
      subheading: heroEntry.description,
      centerImageSrc: heroEntry.image.url,
      ctas: heroEntry.links.map((link) => ({
        image: link.image.url,
        url: link.link.href,
        title: link.link.title,
      })),
    };
  } catch (e) {
    return Promise.reject(e);
  }
}
