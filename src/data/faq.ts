import { IFAQ } from "@/types";
import { Entry } from "./type";
import API from "@/utils/api";

type IFAQResponse = Entry<{
  heading: string;
  sub_heading: string;
  description: string;
  contact: string;
  items: {
    title: string;
    content: string;
  }[];
}>;

type IFAQSection = {
  heading: string;
  subHeading: string;
  description: string;
  contact: string;
  items: IFAQ[];
};

export async function getFAQ(): Promise<IFAQSection> {
  try {
    const { data } = await API.get<IFAQResponse>(
      "/content_types/faq/entries/bltf17885692d81de72",
    );

    const faqEntry = data.entry;

    return {
      heading: faqEntry.heading,
      subHeading: faqEntry.sub_heading,
      description: faqEntry.description,
      contact: faqEntry.contact,
      items: faqEntry.items.map((item) => ({
        question: item.title,
        answer: item.content,
      })),
    };
  } catch (e) {
    return Promise.reject(e);
  }
}
