import API from "@/utils/api";
import { Entry, Link } from "./type";

export type MenuVariant = "default" | "primary";

export type MenuItem = {
  text: string;
  url: string;
  variant: MenuVariant;
};

type TopMenu = Entry<{
  items: {
    text: string;
    link: Link;
    variant: MenuVariant;
  }[];
}>;

export async function getMenuItems(): Promise<MenuItem[]> {
  try {
    const { data } = await API.get<TopMenu>(
      "/content_types/top_menu/entries/blt749d0a00e4ffdbd4",
    );

    return data.entry.items.map((item) => ({
      text: item.text,
      url: item.link.href,
      variant: item.variant,
    }));
  } catch (e) {
    return Promise.reject(e);
  }
}
