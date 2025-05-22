import { ITestimonial } from "@/types";
import { Asset, Entry } from "./type";
import API from "@/utils/api";

type ITestimonialResponse = Entry<{
  heading: string;
  description: string;
  items: {
    avatar: Asset;
    name: string;
    role: string;
    content: string;
  }[];
}>;

type ITestimonialSection = {
  heading: string;
  description: string;
  items: ITestimonial[];
};

export async function getTestimonial(): Promise<ITestimonialSection> {
  try {
    const { data } = await API.get<ITestimonialResponse>(
      "/content_types/testimonials/entries/blt3736268a915ed0eb",
    );

    const testimonialsEntry = data.entry;

    return {
      heading: testimonialsEntry.heading,
      description: testimonialsEntry.description,
      items: testimonialsEntry.items.map((item) => ({
        name: item.name,
        role: item.role,
        message: item.content,
        avatar: item.avatar.url,
      })),
    };
  } catch (e) {
    return Promise.reject(e);
  }
}
