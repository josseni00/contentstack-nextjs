import { IPricing } from "@/types";
import { Entry } from "./type";
import API from "@/utils/api";

export type IPricingSection = {
  title: string;
  description: string;
  items: IPricing[];
};

type IPricingResponse = Entry<{
  heading: string;
  description: string;
  items: {
    name: string;
    price: string;
    currency: string;
    frequency: string;
    features: {
      title: string;
      description: string;
      items: string[];
    };
    top_pick: boolean;
  }[];
}>;

export async function getPricing(): Promise<IPricingSection> {
  try {
    const { data } = await API.get<IPricingResponse>(
      "/content_types/pricing/entries/blt6592a4548eaffe4b",
    );

    const pricingEntry = data.entry;

    return {
      title: pricingEntry.heading,
      description: pricingEntry.description,
      items: pricingEntry.items.map((item) => ({
        name: item.name,
        price: item.price,
        currency: item.currency,
        frequency: item.frequency,
        features: {
          title: item.features.title,
          description: item.features.description,
          items: item.features.items,
        },
        topPick: item.top_pick,
      })),
    };
  } catch (e) {
    return Promise.reject(e);
  }
}
