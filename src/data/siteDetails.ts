import API from "@/utils/api";
import { Asset, Entry } from "./type";

export type SiteDetails = {
  siteName: string;
  siteUrl: string;
  metaData: {
    title: string;
    description: string;
  };
  language: string;
  locale: string;
  siteLogo: string;
  googleAnalyticsId: string;
};

type WebConfig = Entry<{
  logo: Asset;
  meta_data: {
    title: string;
    description: string;
  };
  site_url: {
    title: string;
    href: string;
  };
}>;

export async function getSiteDetails(): Promise<SiteDetails> {
  try {
    const { data } = await API.get<WebConfig>(
      "/content_types/web_config/entries/blt92b14b1963fd3ef4",
    );

    const webConfigEntry = data.entry;

    return {
      googleAnalyticsId: "",
      siteLogo: webConfigEntry.logo.url,
      language: "",
      locale: "",
      metaData: {
        title: webConfigEntry.meta_data.title,
        description: webConfigEntry.meta_data.description,
      },
      siteName: webConfigEntry.title,
      siteUrl: webConfigEntry.site_url.href,
    };
  } catch (e) {
    return Promise.reject(e);
  }
}
