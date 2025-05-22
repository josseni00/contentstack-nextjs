import API from "@/utils/api";
import { Asset, Entry } from "./type";

export type BenefitBulletT = {
  title: string;
  description: string;
  icon: string;
};

export type BenefitT = {
  title: string;
  description: string;
  bullets: BenefitBulletT[];
  imageSrc: string;
};

type BenefitResponseT = Entry<{
  items: {
    heading: string;
    description: string;
    image: Asset;
    items: {
      heading: string;
      description: string;
      icon: Asset;
    }[];
  }[];
}>;

export async function getBenefits(): Promise<BenefitT[]> {
  try {
    const { data } = await API.get<BenefitResponseT>(
      "/content_types/features/entries/blt4ffc5eb5fb075a88",
    );

    const featureEntry = data.entry;

    return featureEntry.items.map((item) => ({
      title: item.heading,
      description: item.description,
      bullets: item.items.map((bullet) => ({
        title: bullet.heading,
        description: bullet.description,
        icon: bullet.icon.url,
      })),
      imageSrc: item.image.url,
    }));
  } catch (e) {
    return Promise.reject(e);
  }
}
