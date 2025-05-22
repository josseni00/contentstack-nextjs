export type Publish_Details = {
  time: string;
  user: string;
  environtment: string;
  locale: string;
};

export type Asset = {
  uid: string;
  _version: number;
  title: string;
  created_at: string;
  created_by: string;
  updated_at: string;
  updated_by: string;
  content_type: string;
  file_size: string;
  file_name: string;
  publish_details: Publish_Details;
  url: string;
};

export type Entry<T> = {
  entry: {
    uid: string;
    title: string;
    _version: number;
    locale: string;
    _in_progress: boolean;
    created_at: string;
    created_by: string;
    updated_at: string;
    updated_by: string;
    publish_details: Publish_Details;
  } & T;
};

export type Link = {
  title: string;
  href: string;
};
