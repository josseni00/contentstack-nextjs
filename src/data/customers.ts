import API from "@/utils/api";
import { Asset, Entry } from "./type";

export type TCustomer = {
  text: string;
  items: {
    name: string;
    logo: string;
  }[];
};

type CustomerResponse = Entry<{
  text: string;
  items: {
    name: string;
    logo: Asset;
  }[];
}>;

export async function getCustomer(): Promise<TCustomer> {
  try {
    const { data } = await API.get<CustomerResponse>(
      "/content_types/customers/entries/blt23a9822ca9bf6c99",
    );

    const customerEntry = data.entry;

    return {
      text: customerEntry.text,
      items: customerEntry.items.map((item) => ({
        name: item.name,
        logo: item.logo.url,
      })),
    };
  } catch (e) {
    return Promise.reject(e);
  }
}
