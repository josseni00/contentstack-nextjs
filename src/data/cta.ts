import { Asset, Entry, Link } from "./type";
import API from "@/utils/api";

export type ICTASection = {
  heading: string;
  subHeading: string;
  links: {
    link: string;
    image: string;
  }[];
};

type ICTAResponse = Entry<{
  heading: string;
  description: string;
  links: {
    link: Link;
    image: Asset;
  }[];
}>;

export async function getCTA(): Promise<ICTASection> {
  try {
    const { data } = await API.get<ICTAResponse>(
      "/content_types/cta/entries/bltbd3c14b52cf7f837",
    );

    const ctaEntry = data.entry;

    return {
      heading: ctaEntry.heading,
      subHeading: ctaEntry.description,
      links: ctaEntry.links.map((link) => ({
        link: link.link.href,
        image: link.image.url,
      })),
    };
  } catch (e) {
    return Promise.reject(e);
  }
}
