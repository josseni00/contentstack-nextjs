import { IStats } from "@/types";
import { Asset, Entry } from "./type";
import API from "@/utils/api";

type IStatsResponse = Entry<{
  items: {
    icon: Asset;
    title: string;
    description: string;
  }[];
}>;

export async function getStats(): Promise<IStats[]> {
  try {
    const { data } = await API.get<IStatsResponse>(
      "/content_types/metrics/entries/blt3e74d4d62951ddc2",
    );

    const statEntry = data.entry;

    return statEntry.items.map((item) => ({
      title: item.title,
      icon: item.icon.url,
      description: item.description,
    }));
  } catch (e) {
    return Promise.reject(e);
  }
}
