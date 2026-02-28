export type Project = {
  id: string;
  documentId: string;
  title: string;
  description: string;
  url: string;
  image: string;
  date: string;
  category: string;
  featured: boolean;
};

export type PostMeta = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  image?: string;
  body: string
};

export type StrapiResponse<T> = {
  data: T[];
};

export type StrapiProjectAttributes = {
  documentId: string;
  id: string;
  title: string;
  description: string;
  url: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
  date: string;
  category: string;
  featured: boolean;
};


export type StrapiPostAttributes = {
  documentId: string;
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  body: string;
  image?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
 
};